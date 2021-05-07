// OPTION 1
// const args = process.argv.slice(2)
// const num = Number(args[0]) + Number(args[1]);
// console.log(num);

//OPTION 2
// const args = process.argv.slice(2);
// const num = +args[0] + +args[1]; //+args evals if args is a number, if it is a number, then it adds it to the sum
// console.log(num);

// SUM OF NUMBERS ONLY IF THEY ARE AN INTEGER (NO DECIMALS)
const args = process.argv.slice(2);

let total = 0;

for (const element of args) {
  const converted = Number(element); //converting elements from strings in array to numbers
  if (Number.isInteger(converted) && converted > 0) {
    total += converted; //Same as total = total + element
  }
}
console.log(("total", total));