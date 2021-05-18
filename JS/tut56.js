console.log("Welcome To Tutorial 56");

let people = ["Sumit", "Rohan", "SkillF", "Shubham", "Vikrant"];

// **********For in loop*******

// Traditional for loop:
// for (let index = 0; index < people.length; index++) {
//   const element = people[index];
//   console.log(element);
// }

// 1.ITERATING AN OBJECT

obj = {
  name: "Sumit",
  language: "JavaScript",
  hobbies: "Andoid app development",
};
// console.log(obj);

//1.1 Iterating an object using traditional for loop :

// for (let index = 0; index < Object.keys(obj).length; index++) {
//   const element = obj[Object.keys(obj)[index]];
//   console.log(element);
// }

// 1.2 Iterating an object using for in loop:

for (let key in obj) {
  console.log(obj[key]);
}

// 2. ITERATING A STRING
// We can use for in with strings to loop through all the characters
myString = "This is my string";

for (let char in myString) {
  console.log(myString[char]);
}

// *********** For of Loop ******************

console.log("*********For of loop starts here ********");

people = ["Sumit", "Rohan", "SkillF", "Shubham", "Vikrant"];

for (let name of people) {
  console.log(name);
}
