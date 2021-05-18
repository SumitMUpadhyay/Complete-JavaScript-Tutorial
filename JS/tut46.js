console.log("Welcome To Tutorial 46");

let reg = /sumit/; // This is regular expression literal in java script
reg = /sumit/g; // g means global
// reg = /sumit/i; // i means case insensitive
// console.log(reg);
// console.log(reg.source);

let s = "THis is something awesome to code with sumit and also sumit money";

// Functions To Match Expression

//1. exec() - This function will return an array for match  or null  for no match
let result = reg.exec(s);

// result = reg.exec(s);
// console.log(result);

// result = reg.exec(s);
// console.log(result); We can use multiple exec with global flag

// if (result) {
//   console.log(result);
//   console.log(result.input);
//   console.log(result.index);
// }

// 2. test() - Returns true or false

let result2 = reg.test(s);
console.log(result2); // This will only print true if the "reg" is there in the string "s"

//3.match() - It will return an array of results or null 

//let result3 = reg.match(s)----->This is wrong!!
let result3 = s.match(reg)   //----> This is right
// console.log(result3);


//4.search() - Returns index of first match else  -1 

// let result4 = reg.search(s)------> This is Wrong !!
let result4 = s.search(reg) // --->This is right 
// console.log(result4);

// 5.replace() - Returns new replaced string with all the replacement( if no global will be given ,first match will be given )

let result5 = s.replace(reg, 'Sanpreey');
console.log(result5);
