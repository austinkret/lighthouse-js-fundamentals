let repeatNumbers = function (data) {
  let value = [];
  let newValue = [];
  for (let i = 0; i < data.length; i++) {
    for (var j = 0; j < data[i][1]; j++) {
      value.push(data[i][0]);
      newValue = value.join("");
    }
  }
  return newValue;
};

console.log(repeatNumbers([[1, 10]]));
console.log(
  repeatNumbers([
    [1, 2],
    [2, 3],
  ])
);
console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2],
  ])
);
