const multiplicationTable = function (maxValue) {
  let numbers = "";
  for (let i = 1; i <= maxValue; i++) {
    for (let j = 1; j <= maxValue; j++) {
      if (j % maxValue === 0) {
        numbers = numbers + i * j + "\n";
      } else {
        numbers = numbers + i * j + " ";
      }
    }
  }
  return numbers;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
