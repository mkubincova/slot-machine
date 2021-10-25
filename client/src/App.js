import React from 'react';
import Spin from './Spin';

function App() {
  const [data, setData] = React.useState({reel1:"cherry", reel2:"cherry", reel3:"cherry"});
  const [coins, setCoins] = React.useState(20);

  const handleSpin = () => {
    fetch("/spin")
      .then((res) => res.json())
      .then((data) => {setData(data); checkPrize(data)});
  }

  const checkPrize = (r) => {
    let fruits = [r.reel1, r.reel2, r.reel3]
    let cherries = fruits.filter((fruit) => {return fruit === "cherry"});
    let apples = fruits.filter((fruit) => {return fruit === "apple"});
    let bananas = fruits.filter((fruit) => {return fruit === "banana"});
    let lemons = fruits.filter((fruit) => {return fruit === "lemon"});

    //coins + prize - (1 coin for spin)
    if (cherries.length === 3) {
      setCoins(coins + 49)
    } else if (cherries.length === 2) {
      setCoins(coins + 39)
    } else if (apples.length === 3) {
      setCoins(coins + 19)
    } else if (apples.length === 2) {
      setCoins(coins + 9)
    } else if (bananas.length === 3) {
      setCoins(coins + 14)
    } else if (bananas.length === 2) {
      setCoins(coins + 4)
    } else if (lemons.length === 3) {
      setCoins(coins + 2)
    } else {
      setCoins(coins - 1);
    }
  }

  const playAgain = () => {
    setCoins(20);
    setData({reel1:"cherry", reel2:"cherry", reel3:"cherry"});
  }

  return (
    <div className="App">
      <h1>Slot machine</h1>
      <h2>Coins: {coins}</h2>
      <button onClick={(coins > 0) ? handleSpin : playAgain}>{(coins > 0) ? "SPIN" : "PLAY AGAIN"}</button>
      <Spin data={data} />
    </div>
  );
}

export default App;
