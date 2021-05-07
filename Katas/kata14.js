const calculateChange = (total, cash) => {
  let change = cash - total;
  const changeObject = {};
  const currency = [
    { name: "twentyDollar", value: 2000 },
    { name: "tenDollar", value: 1000 },
    { name: "fiveDollar", value: 500 },
    { name: "twoDollar", value: 200 },
    { name: "oneDollar", value: 100 },
    { name: "quarter", value: 25 },
    { name: "dime", value: 10 },
    { name: "nickel", value: 5 },
    { name: "penny", value: 1 },
  ];
  for (let i = 0; i < currency.length; i++) {
    changeObject[currency[i].name] = Math.floor(change / currency[i].value);
    change -= currency[i].value * changeObject[currency[i].name];
  }
  for (const key in changeObject) {
    if (changeObject[key] === 0) {
      delete changeObject[key];
    }
  }
  return changeObject;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
