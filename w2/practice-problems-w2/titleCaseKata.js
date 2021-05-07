//Title case (or Capital Case) is a specific method of capitalizing the characters
//of every word in a sentence in order to make it usable as a title or headline.

const titleCase = (text) => {
  let newWords = text.toLowerCase().split(' ');  //lowercase all following letters in the string
  for (let i = 0; i < newWords.length; i++) {
    //loop through the string
    let capitals = newWords[i].charAt(0).toUpperCase();
    //capitalize the first letter of every word in the string
    newWords[i] =  capitals + newWords[i].slice(1);
    //take the capital letters and add them to the rest of the letters
  }
  return newWords.join(' ');
  //join the array back together with a space inbetween words
};

console.log(titleCase("ThIs iS aN example")); //return "This Is An Example"
