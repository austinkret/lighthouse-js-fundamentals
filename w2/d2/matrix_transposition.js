//Pair Programming - Astrid, Austin

const transpose = function(matrix) {

  let newArray = [];

  for (let i = 0; i < matrix.length; i++) {
    newArray.push([]);
  } if (matrix.length > 1) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        newArray[j].push(matrix[i][j]);
      }
    }
  } else {
    for (let x = 0; x < matrix.length; x++) {
      for (let y = 0; y < matrix[x].length; y++) {
        const element = matrix.map((matrix) => matrix[y]).join();
        console.log(element);
      }
    }
  }
  return newArray;
};


// Do not edit this function.
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write('\n');
  }
};

printMatrix(transpose([
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4]
]));

console.log('----');

printMatrix(transpose([
  [1, 2],
  [3, 4],
  [5, 6]
]));

console.log('----');

printMatrix(transpose([
  [1, 2, 3, 4, 5, 6, 7]
]));