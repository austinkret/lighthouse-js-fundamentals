const urlEncode = function (text) {
  let encode = " ";

  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      if (!(i == 0 || i == text.length - 1)) {
        encode += "%20";
      }
    } else {
      encode += text[i];
    }
  }
  return encode;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
