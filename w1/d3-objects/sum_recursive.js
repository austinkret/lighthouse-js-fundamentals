//TRADITIONAL FOR LOOP
// function sumToOne(n) {
//   let sum = 0;
//   for (let i = n; i >= 1; i--) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(sumToOne(4));

//CONVERT THIS TO A RECURSIVE LOOP
/*SUMMING THROUGH RECURSION

STEPS FOR RECURSION:
1. Figure out the base case and the recursive case


PSEUDOCODE:
-define the function function sumToOne(n)
-define the recursive case: if (n > 1) return 1
-return the number + sum of all the numbers from 1 to n- 1
-define base case n === 1
-return 1
*/

const sumToOne = function(n) {
  if (n === 1) {
    return 1;
  }
  return n + sumToOne(n - 1);
};

console.log(sumToOne(4));