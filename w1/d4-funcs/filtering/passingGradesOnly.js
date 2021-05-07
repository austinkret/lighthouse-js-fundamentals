const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];

const passingGrades = grades.filter(num => num >= 70);

console.log("The passing grades are: ", passingGrades);

//filter grades down to passing grades only
//passing grade is 70 AND above
//return the passing grades