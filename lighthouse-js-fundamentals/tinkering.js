let claireSays = function (max) {
  let herMessage = "";
  for (let i = 0; i < max; i++) {
    herMessage += "shut up";
  }
  return herMessage;
};

function helloClaire(callbackFunc) {
  return "Oh, " + callbackFunc(3);
}

helloClaire(claireSays);
