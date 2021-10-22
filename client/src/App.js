import React from 'react';

function App() {
  const [data, setData] = React.useState(null);
  const [coins, setCoins] = React.useState(20);

  React.useEffect(() => {
    fetch("/spin")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  console.log(data);
  return (
    <div className="App">
      <h1>Slot machine</h1>
      <h4>Coins: {coins}</h4>
      <button>SPIN</button>
      <div className="spin">
        <div className="reel">{!data ? "Loading..." : data.reel1}</div>
        <div className="reel">{!data ? "Loading..." : data.reel2}</div>
        <div className="reel">{!data ? "Loading..." : data.reel3}</div>
      </div>
    </div>
  );
}

export default App;
