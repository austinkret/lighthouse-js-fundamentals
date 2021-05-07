// QUADRATICS

const arrayContainsSum = (array, sum) => {
  for (let i = 0; i < array.length; i++) { //1, n + 1, n
    const element1 = array[i]; // n

    for (let ii = 0; ii < array.length; ii++) { // n, n^2 + 1, n^
      const element2 = array[ii]; // n^2

      if (element1 + element2 === sum) { // n^2
        return true;
      }
    }
  }
  return false;
};

// 3 + 5n + 4n^2
console.log(arrayContainsSum([0,2,4,7,9,10], 6));


const arrayContainsSumBest = (array, sum) => {
  let i = 0; // 1
  let ii = array.length - 1;// 1

  while (i <= ii) {// n + 1
    const element1 = array[i];// n
    const element2 = array[ii];// n
    const currentSum = element1 + element2;// n

    if (currentSum === sum) {// n
      return true;
    } else if (currentSum > sum) {// n
      ii--;// n
    } else {
      i++;
    }
  }
  return false;// 1
}

// 4 + 7n