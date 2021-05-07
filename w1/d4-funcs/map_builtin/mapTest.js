const lighthouses = ["Gibraltar Point", "Peggy's Point", "Cove Island", "Discovery Island", "Cape Scott", "Point Clark", "Kincardine"];

// turn the array of words into an array of numbers
//the array should be the length of each name in lighthouses

let newArray = lighthouses.map(char => char.length);

console.log(newArray);
// It should output: [ 15, 13, 11, 16, 10, 11, 10 ]
