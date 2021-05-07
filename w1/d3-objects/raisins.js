// Donny, Austin, Calvin - Mar 29 2021 cohort

// Starter code

const raisinAlarm = function(cookie) {
  // Put your solution here
  for (let x = 0; x < cookie.length; x++) {
    if (cookie[x] === "🍇") {
      return "Raisin alert!";
    }
  } return "All good!";
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

// Expected Output
// Raisin alert!
// Raisin alert!
// All good!

//STRETCH
const raisinAlarmArray = function(cookies) {
  let results = [];
  for (let i = 0; i < cookies.length; i++) {
    if (cookies[i].includes('🍇')) {
      results.push("Raisin alert!");
    } else {
      results.push("All good!");
    }
  }
  return results;
};

console.log(raisinAlarmArray(
  [
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"]
  ]
));