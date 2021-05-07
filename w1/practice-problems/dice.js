let num = process.argv.slice(2);

num = Number(num);

function rollingDice(num) {
  let finalResults = "";
  for (let i = 0; i < num; i++) {
    let resultOfDice = "";
    resultOfDice = Math.floor((Math.random() * 6) + 1);
    finalResults += resultOfDice + ", ";
  }
  let lastComma = finalResults.lastIndexOf(", ");
  finalResults = finalResults.slice(0, lastComma);

  return finalResults;
}

console.log("Rolled " + num + " dice: " + rollingDice(num));
