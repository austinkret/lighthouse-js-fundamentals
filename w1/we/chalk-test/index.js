const chalk = require("chalk");

const message = `Hello ${chalk.yellow("World")}. My name is ${chalk.blue.bold("Austin")} and I live in the city of ${chalk.red.italic.bgGreen.bold('Vancouver')}.`;
console.log(message);
