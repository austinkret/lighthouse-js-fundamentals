const numberOfVowels = function numberOfVowels(data) {
  let vowel = "aeiou";
  let num = 0;

  for (let i = 0; i < data.length; i++) {
    if (vowel.indexOf(data[i]) !== -1) {
      num += 1;
    }
  }
  return num;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
