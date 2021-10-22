const express = require("express");
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/spin", (req, res) => {

    const reel1 = ["cherry", "lemon", "apple", "lemon", "banana", "banana", "lemon", "lemon"];
    const reel2 = ["lemon", "apple", "lemon", "lemon", "cherry", "apple", "banana", "lemon"];
    const reel3 = ["lemon", "apple", "lemon", "apple", "cherry", "lemon", "banana", "lemon"];

    function randomNum(min, max) { 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    let one = reel1[randomNum(0,7)];
    let two = reel2[randomNum(0,7)];
    let three = reel3[randomNum(0,7)];
    
    let spin = {reel1:one, reel2:two, reel3:three};

    res.json(spin);
});

// All other GET requests not handled before will return the React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});