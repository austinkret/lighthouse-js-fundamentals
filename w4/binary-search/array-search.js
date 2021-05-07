// LINEAR SEARCH
const search = function(array, item) {
  let index = null; // 1

  for (let i = 0; i < array.length; i++) { //1; N + 1; N
    if (item === array[i]) { // N
      index = i; // ONLY HAPPENS ONCE SO NOT COUNTED
      break;
    }
  }
  return index; // 1
};

//WHAT IS THE RUN TIME???
//3N + 4

//IN THE CASE BELOW:
console.log(search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], -1));
// 3N + 4 ==> 3(10) + 4
// 34 OPERATIONS



// REFACTOR FOR BINARY SEARCH
const binarySearch = function(array, item) {
  let min = 0; // 1
  let max = array.length - 1; // 1

  while (true) { // lg n
    const endIndex = min + max; // lg n
    const middleDecimal = endIndex/2.0; // lg n
    const middleIndex = Math.floor(middleDecimal); // lg n

    const currentItem = array[middleIndex]; // lg n

    if (currentItem === item) { // lg n
      return middleIndex;
    } else if (currentItem < item) { // lg n
      min = middleIndex + 1;
    } else {
      max = middleIndex - 1; // lg n
    }

    if (min > max) { // lg n
      return null; // 1
    }
  }
};

// RUN TIME IS 9LOG(N) + 3

//IN THE CASE BELOW:
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], -1));
// 9LOG(10) + 3
// 9 * 4 + 3
// 39 OPERATIONS