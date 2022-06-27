const generateBoard = function (whiteQueen, blackQueen) {
  let chessBoard = [];
  //make empty chessboard
  for (let i = 0; i < 8; i++) {
    let row = [];
    for (let j = 0; j < 8; j++) {
      row.push(0);
    }
    chessBoard.push(row);
  }

  // console.log(chessBoard);

  chessBoard[whiteQueen[0]][whiteQueen[1]] = 1;
  chessBoard[blackQueen[0]][blackQueen[1]] = 1;

  return chessBoard;
};

const queenThreat = function (chessBoard) {

  let queensPosition = [];

  // find the queens position
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (chessBoard[i][j] === 1) queensPosition.push([i, j]);
    }
  }

  //determine if queen position is a threat
  if (queensPosition[0][0] === queensPosition[1][0] || queensPosition[0][1] === queensPosition[1][1]) {
    return true;
  } else if (Math.abs(queensPosition[0][0] - queensPosition[1][0]) === Math.abs(queensPosition[0][1] - queensPosition[1][1])) {
    return true;
  } else {
    return false;
  }

};

//should return true
// let whiteQueen = [0, 5];
// let blackQueen = [5, 0];
// let generatedBoard = generateBoard(whiteQueen, blackQueen);
// console.log(generatedBoard);
// console.log(queenThreat(generatedBoard));


//should return false
let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));