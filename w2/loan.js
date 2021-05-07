let creditLimit = 2000;

console.log("Asking for $150, which should be okay ...");
const loanOut = (amount) => {
  return new Promise((resolve, reject) => {
    if (creditLimit < amount) {
      reject('Insufficient Funds');
    } else {
      creditLimit -= amount;
      resolve(amount);
    }
  });
};

loanOut(150)
  .then((amountReceived) => {
    console.log(`I got $${amountReceived} loan from the bank. The remaining credit limit is: $${creditLimit}.`);
  })
  .catch((err) => {
    console.log(`Error: ${err}!`);
  });