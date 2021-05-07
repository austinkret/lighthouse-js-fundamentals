let umbrella = {
  color: "pink",
  isOpen: true,
  open: function () {
    if (umbrella.isOpen === true) {
      return "The umbrella is already opened!";
    } else {
      umbrella.isOpen = true;
      return "Julia opens the umbrella!";
    }
  },
  close: function () {
    if (umbrella.isOpen === false) {
      return "The umbrella is already closed!";
    } else {
      umbrella.isOpen = false;
      return "Julia closes the umbrella!";
    }
  },
};

let girlfriend = {
  name: "Claire",
  age: 25,
  parents: ["Trish", "Gavin"],
  siblings: "Quinn",
  sport: "Triathlon",
};

let garage = {
  bike: {
    name: "Trek Speed Concept",
    color: "black",
    wheels: 2,
  },
  car: {
    name: "Ferarri F1",
    color: "red",
    wheels: 4,
  },
};

console.log(garage["car"]);

var savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
  deposit: function addMoney(amount) {
    if (amount > 0) {
      savingsAccount.balance += amount;
    }
  },
  withdraw: function removeMoney(amount) {
    var verifyBalance = savingsAccount.balance - amount;
    if (amount > 0 && verifyBalance >= 0) {
      savingsAccount.balance -= amount;
    }
  },
  printAccountSummary() {
    return `Welcome!
 Your balance is currently $${savingsAccount.balance} and your interest rate is ${savingsAccount.interestRatePercent}%.`;
  },
};

console.log(savingsAccount.printAccountSummary());

let facebookProfile = {
  name: "Austin",
  friends: 1357,
  messages: ["Hey", "How are you?", "Miss you all!"],
  postMessage: function (message) {
    facebookProfile.message.push(message);
  },
  deleteMessage: function (index) {
    facebookProfile.messages.splice(index, 1);
  },
  addFriend: function () {
    facebookProfile.friends += 1;
  },
  removeFriend: function () {
    if (facebookProfile.friends > 0) {
      facebookProfile.friends -= 1;
    }
  },
};

console.log(facebookProfile.deleteMessage[2]);

var donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 },
];

donuts.forEach(function (donut) {
  console.log(donut.type + " donuts cost $" + donut.cost + " each");
});
const smartGarbage = function (trash, bins) {
  bins[trash] += 1;
  return bins;
};

smartGarbage("recycling", { waste: 4, recycling: 2, compost: 5 });

console.log(smartGarbage());
const carPassing = function (cars, speed) {
  let time = Date.now();
  let driver = {
    time: time,
    speed: speed,
  };
  cars.push(driver);
  return cars;
};

const vegetables = [
  {
    submitter: "Old Man Franklin",
    redness: 10,
    plumpness: 5,
  },
  {
    submitter: "Sally Tomato-Grower",
    redness: 2,
    plumpness: 8,
  },
  {
    submitter: "Hamid Hamidson",
    redness: 4,
    plumpness: 3,
  },
];

const metric = "redness";

const judgeVegetable = function (vegetables, metric) {
  let bestTomato = vegetables[0];
  for (let i = 0; i < vegetables.length; i++) {
    let thisTomato = vegetables[i];
    if (thisTomato[metric] > bestTomato[metric]) {
      bestTomato = thisTomato;
    }
  }
  return bestTomato.submitter;
};
console.log(judgeVegetable(vegetables, metric));
