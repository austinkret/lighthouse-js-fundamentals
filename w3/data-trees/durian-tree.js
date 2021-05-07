class Employee {
  constructor(name, title, salary) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.boss = null;
    this.subordinates = [];
  }

  addSubordinate(subordinate) {
    this.subordinates.push(subordinate);
    subordinate.boss = this;
  }

  get numberOfSubordinates() {
    return this.subordinates.length;
  }

  get numberOfPeopleToCEO() {
    let numberOfPeople = 0;
    let currentEmployee = this;

    // climb "up" the tree (using iteration), counting nodes, until no boss is found
    while (currentEmployee.boss) {
      currentEmployee = currentEmployee.boss;
      numberOfPeople++;
    }
    return numberOfPeople;
  }

  hasSameBoss(employee) {
    return this.boss === employee.boss;
  }

  employeesThatMakeOver(amount) {
    let employees = [];

    //If the current employee makes over that amount, add them to the array.
    if (this.salary > amount) {
      employees.push(this);
    }
    // Call this method on all of the current employee's subordinates and combine their results with the current results.
    for (const subordinate of this.subordinates) {
      const subordinatesThatMakeOver = subordinate.employeesThatMakeOver(amount);
      employees = employees.concat(subordinatesThatMakeOver);
    }
    return employees;
  }
  
  get totalEmployees() {
    let total = 0;
    
    //base condition
    if (this.subordinates.length === 0) {
      return 1;
    }

    //recursive condition
    for (const employee of this.subordinates) {
      total += employee.totalEmployees;
    }
    return total + 1;
  }
}

const ada = new Employee("Ada", "CEO", 3000000.00);
const craig = new Employee("Craig", "VP Software", 1000000);
const arvinder = new Employee("Arvinder", "Chief Design Officer", 1000000);
const angela = new Employee("Angela", "VP Retail", 1000000);
const phil = new Employee("Phil", "VP Marketing", 1000000);
const simone = new Employee("Craig", "something", 700000);
const ali = new Employee("Craig", "something", 700000);
const sarah = new Employee("Ali", "something", 700000);
const andrew = new Employee("Ali", "something", 700000);

ada.addSubordinate(craig);
ada.addSubordinate(arvinder);
ada.addSubordinate(angela);
ada.addSubordinate(phil);

craig.addSubordinate(simone);
craig.addSubordinate(ali);
ali.addSubordinate(sarah);
ali.addSubordinate(andrew);


// console.log(ada.totalEmployees);
console.log(craig.totalEmployees);