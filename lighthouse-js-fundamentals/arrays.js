let team = ["Austin", "Claire", "Sam", "Kolina", "Tyler", "Alistair"];

function hasEnoughPlayers(team) {
  if (team.length >= 6) {
    return true;
  } else return false;
}

console.log(hasEnoughPlayers(team));

let donuts = ["jelly donut", "chocolate donut", "glazed donut"];

donuts.forEach(function (donuts) {
  donuts += " hole";
  donuts = donuts.toUpperCase();
  console.log(donuts);
});

words = ["cat", "in", "hat"];
words.forEach(function (word, num, all) {
  console.log("Word " + num + " in " + all.toString() + " is " + word);
});

let donut = ["jelly donut", "chocolate donut", "glazed donut"];

let improvedDonuts = donuts.map(function (donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  return donut;
});

console.log(improvedDonuts);

let donutBox = [
  ["glazed", "chocolate glazed", "cinnamon"],
  ["powdered", "sprinkled", "glazed cruller"],
  ["chocolate cruller", "Boston creme", "creme de leche"],
];

for (var row = 0; row < donutBox.length; row++) {
  // here, donutBox[row].length refers to the length of the donut array currently being looped over
  for (var column = 0; column < donutBox[row].length; column++) {
    console.log(donutBox[row][column]);
  }
}
