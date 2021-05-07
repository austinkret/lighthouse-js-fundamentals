class Person {
  constructor(name, quirkyFact) {
    this.name = name;
    this.organization = 'Lighthouse Labs';
    this.quirkyFact = quirkyFact;
    this.email = 'defaultEmail@email.com';
  }
  bio() {
    return `My name is ${this.name} and my quirky facts is: ${this.quirkyFact}.`;
  }
}

class Student extends Person {
  enroll(cohort) {
    this.cohort = cohort;
  }
  bio() {
    return `I'm a student at lighthouse Labs. ${super.bio()}`;
  }
}

class Mentor extends Person {
  goOnShift() {
    this.onshift = true;
  }

  goOffShift() {
    this.onShift = false;
  }
}

// let newMentor = new Mentor;
// newMentor.name = 'Jonathan';
// newMentor.quirkyFact = 'I like to juggle"';
// newMentor.email = 'jonathanrocks10101@batmail.com';
// console.log(newMentor);

// let newStudent = new Student;
// newStudent.name = 'Austin';
// newStudent.enroll('March 29');
// newStudent.quirkyFact = 'I am trash at programming right now';
// newStudent.email = 'austinkret@superemail.com';
// console.log(newStudent);

let austin = new Student('Austin', 'I am trash at programming right now');
console.log(austin.bio());