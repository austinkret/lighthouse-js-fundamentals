const organizeInstructors = function (instructors) {
  let courses = {};

  for (let i = 0; i < instructors.length; i++) {
    let course = instructors[i].course;
    if (course in courses) {
      courses[course].push(instructors[i].name);
    } else {
      courses[course] = [instructors[i].name];
    }
  }
  return courses;
};

console.log(
  organizeInstructors([
    { name: "Samuel", course: "iOS" },
    { name: "Victoria", course: "Web" },
    { name: "Karim", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  organizeInstructors([
    { name: "Brendan", course: "Blockchain" },
    { name: "David", course: "Web" },
    { name: "Martha", course: "iOS" },
    { name: "Carlos", course: "Web" },
  ])
);
