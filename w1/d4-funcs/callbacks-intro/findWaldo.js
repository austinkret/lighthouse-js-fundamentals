// const findWaldo = function(names, found) {
//   for (let i = 0; i < names.length; i++) {
//     let name = names[i];
//     if (name === "Waldo") {
//       found(i);   // execute callback
//     }
//   }
// }

const findWaldo = function(names, found) {
  names.forEach((name, index) => {
      //loop through each elemnt of array "names"
    if (name === "Waldo") {
        // if element is equal to Waldo
      found(index); // execute callback
    }
  });
};

const actionWhenFound = (index) => { //accept a single argument called index
  console.log("Found Waldo at index", index, "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);