const args = process.argv.slice(2);

function reverseLoop(args) {
  let newString = "";
  for (let i = args.length - 1; i >= 0; i--) {
    newString = newString += args;
  }
  return newString;
}
console.log(reverseLoop(args));

//NOT COMPLETED & NOT SUCCESSFUL