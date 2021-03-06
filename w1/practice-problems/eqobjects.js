// FUNCTION IMPLEMENTATION
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = (arrOne, arrTwo) => {
  if (arrOne.length === arrTwo.length) {
    for (let i = 0; i < arrOne.length; i++) {
      if (arrOne[i] !== arrTwo[i]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};


const eqObjects = (object1, object2) => {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  // Returns true if both objects have identical keys with identical values.
  if(keys1.length !== keys2.length) {
    return false; 
        // Otherwise you get back a big fat false!
  };
  for (const element of keys1) {
    if (Array.isArray(object1[element]) && Array.isArray(object2[element])) {
      if (eqArrays(object1[element], object2[element]) === false) {
        return false;
      } 
      } else if (object1[element] !== object2[element]) {
        return false;
    }
  }
  return true;
};

const ab = {a: "1", b: "2"};
const ba = {b: "2", a: "1"};
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3]};
const dc = { d: ["2", 3], c: "1"};
assertEqual(eqObjects(cd, dc), true);

const cd2 = {c: "1", d: ["2", 3, 4]};
assertEqual(eqObjects(cd, cd2), false);