const nameInverter = function(name) {
  if (name === undefined) {
    throw Error('Error');
  }

  let trimName = name.trim();
  let fullName = trimName.split(" ");
  let firstName = fullName[0];
  let lastName = fullName[1];

  if (name === "") {
    return "";
    //if the name is an empty string, return an empty string
  } else if (fullName.length === 1 && name.indexOf(".") !== -1) {
    return "";
    //if given an empty honorific (Dr., Mr., Ms., etc.), return an empty string
  } else if (fullName.length === 1) {
    return trimName;
  } else if (fullName.length === 2 && name.indexOf(".") !== -1) {
    let honorific = fullName[0];
    let name1 = fullName[1];
    return `${honorific} ${name1}`;
  } else if (fullName.length > 2 && name.indexOf(".") !== -1) {
    let honor = fullName[0];
    let nameOne = fullName[1];
    let nameTwo = fullName[2];
    return `${honor} ${nameTwo}, ${nameOne}`;
  } else if (fullName.length === 2) {
    return `${lastName}, ${firstName}`;
  }
};

module.exports = nameInverter;