/* The loopyLighthouse function should log to the console all the numbers from 15 to 90, 
except replacing multiples of 2 with "Batty", multiples of 5 with "Beacon", 
and multiples of 2 and 5 with "BattyBeacon".
*/

const loopyLighthouse = function (numbers, multipleNum, values) {
  for (let i = numbers[0]; i <= numbers[1]; i++) {
    if (i % multipleNum[0] === 0 && i % multipleNum[1] === 0) {
      console.log(values[0] + values[1]);
    } else if (i % multipleNum[0] === 0) {
      console.log(values[0]);
    } else if (i % multipleNum[1] === 0) {
      console.log(values[1]);
    } else {
      console.log(i);
    }
  }
};

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
