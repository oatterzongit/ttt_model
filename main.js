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
//// 1. START GAME ////
// inputs:
// - current player, board, won
// output:
// - new board

var startGame = function() {
  won = false;
  currentPlayer = "X";
  board = [
    "", "", "",  // 0, 1, 2,
    "", "", "",  // 3, 4, 5,
    "", "", ""   // 6, 7, 8,
  ];
};



//// 2. Moves (Change turns) ////
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
// Inputs:
// - board
//
// outputs:
// - true or false

var gameWon = function() {
  return (
    ((board[0] === board[1]) && (board[0] === board[2]) && board[0] !== "") ||
    ((board[3] === board[4]) && (board[3] === board[5]) && board[3] !== "") ||
    ((board[6] === board[7]) && (board[6] === board[8]) && board[6] !== "")
  )
};


/* RENDER VIEW */
var render = function() {

};


// 4. Reset game



function winPos() {
  board[0] = "X";
  board[1] = "X";
  board[2] = "X";
  return board;
}

























