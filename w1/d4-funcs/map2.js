//pythagorean z^2 = x^2 + y^2
const input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

const result = input.map((side) => {
  return (Math.sqrt(side.x * side.x + side.y * side.y));
});

console.log(result);
console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);