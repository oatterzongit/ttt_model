console.log("main.js Loaded.")

/* Model */


var won = false;
var currentPlayer = "X";
var board = [
  "", "", "",  // 0, 1, 2,
  "", "", "",  // 3, 4, 5,
  "", "", ""   // 6, 7, 8,
];

/* Behavior */
// 1. Start Game
// 2. Moves (Change turns)
// Inputs:
// - Whose turn it is
// - What cell?
//
// Outputs:
// - fill in the cell with the correct player piece
// - calculate winner
// - turn changes when there are no winners




var move = function(cellIndex) {
  board[cellIndex] = currentPlayer;
  if (gameWon()) {
    won = true;
  } else {
    if (currentPlayer === "X") {
      currentPlayer = "0";
    } else {
      currentPlayer = "X";
    } ;
  }
};

//Ternary Operation could be useful (_?_:_)


// 3. Win Conditions
var gameWon = function() {};
// 4. Reset game
