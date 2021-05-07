let board = [[null,0,0,1],[0,null,null,null],[0,null,null,null],[1,null,null,null]];

const print = (board) => {
  for (let row of board) {
    let line = "|";
    for (let column of row) {
      if (column === 0) {
        line += "O";
      }
      if (column === 1) {
        line += "X";
      }
      if (column === null) {
        line += " ";
      }
      line += "|";
    }
    console.log(line);
  }
};

print(board);

// OUTPUT:
// | |O|O|X|
// |O| | | |
// |O| | | |
// |X| | | |