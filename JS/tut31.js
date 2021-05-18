console.log("This is tutorial number 31");

class Employee {
  constructor(givenName, givenExperience, givenDivision) {
    this.name = givenName;
    this.experience = givenExperience;
    this.division = givenDivision;
  }

  slogan() {
    return `I am ${this.name} and this company is the best`;
  }

  joiningYear() {
    return 2021 - this.experience;
  }

  static add(a, b) {
    return a + b;
  }
}

class Programmer extends Employee {
  constructor(givenName, givenExperience, givenDivision, Language, github) {
    super(givenName, givenExperience, givenDivision);
    this.language = Language;
    this.github = github;
  }

  favouriteLanguage() {
    if (this.language == "python") {
      return "python";
    } else {
      return "javascript";
    }
  }

  static multiply(a, b) {
    return a * b;
  }
}

sumit = new Employee("Sumit", "67", "Development");
// console.log(sumit );

// console.log(sumit.joiningYear());

// console.log(Employee.add(45,70))

rohan = new Programmer("Rohan", 4, "Lays", "Go", "Rohan420");
console.log(rohan);
console.log(rohan.favouriteLanguage())
console.log(Programmer.multiply(5,7))