// Build a function called keysMatch() which will be given two objects and an array of strings.

// It will use the strings to look up the key-value pair in each object and compare the values.
// If all the values are explicitly equal to each other, return true, otherwise return false.

// We can start with the following function definition:

// const obj1 = {a:1, b:2, c:3};
// const obj2 = {a:1, b:8, c:3};

// let key = "b";
// obj2[key]

// const keys = ['a', 'c'] ==> true
// const keys = ['a', 'b'] ==> false

const keysMatch = function(obj1, obj2, keys) {
//loop through the keys
  for (const key of keys) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

console.log(keysMatch({a:1, b:2, c:3}, {a:1, b:8, c:3}, ['a', 'c']));