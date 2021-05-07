const printItems = function(array) {
  array.forEach((item) => {
    if (Array.isArray(item)) {
      printItems(item);
    } else {
      console.log(item);
    }
  });
};

const array = ["😎", ["💩", "🤗"], "😼", "😂"];
printItems(array);

/* HERE'S WHAT'S HAPPENING:
printItems(["😎", ["💩", "🤗"], "😼", "😂"]) {

  // Item is not an array, so just log it
  console.log("😎")

  // Item is an array so call the function again
  printItems(["💩", "🤗"]) {

    // Item is not an array, so just log it
    console.log("💩")

    // Item is not an array, so just log it
    console.log("🤗")
  }

  // Item is not an array, so just log it
  console.log("😼")

  // Item is not an array, so just log it
  console.log("😂")
}
*/