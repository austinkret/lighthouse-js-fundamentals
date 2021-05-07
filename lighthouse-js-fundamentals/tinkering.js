// const lastIndexOf = function (arr, value) {
//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] === value) {
//       return i;
//     }
//   }
//   return -1;
// };

// console.log(lastIndexOf([0, 1, 4, 1, 2], 1), "=?", 3);
// console.log(lastIndexOf([0, 1, 4, 1, 2], 2), "=?", 4);
// console.log(lastIndexOf([0, 1, 4, 1, 2], 3), "=?", -1);
// console.log(lastIndexOf([5, 5, 5], 5), "=?", 2);
// console.log(lastIndexOf([], 3), "=?", -1);

// function concat(array1, array2) {
//   return array1.concat(array2);
// }

// console.log(concat([1, 2, 3], [4, 5, 6]), "=?", [1, 2, 3, 4, 5, 6]);
// console.log(concat([0, 3, 1], [9, 7, 2]), "=?", [0, 3, 1, 9, 7, 2]);
// console.log(concat([], [9, 7, 2]), "=?", [9, 7, 2]);
// console.log(concat([5, 10], []), "=?", [5, 10]);

const numbers = [1, 2, 3, 4, 5];

const bigNumbers = numbers.map((number) => {
  return number * 10;
});

console.log(bigNumbers);
