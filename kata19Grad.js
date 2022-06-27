const generateBoard = function(whiteQueen, blackQueen) {
  let chessBoard = [];
  
  for (let i = 0; i < 8; i++) {
    let row = [];
    for (let j = 0; j < 8; j++) {
      row.push(0);
    }
    chessBoard.push(row);
  }

  console.log(chessBoard)
}

// console.log(genereat)












let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));