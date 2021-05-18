console.log("Welcom To Tutorial Number 41");

// Arrow Function

// Creating a regular function

//  const sumit = function sumit(){

//     console.log("This is the best person ever");

// }
// Converting it to an arrow function
// const sumit = ()=>{

//      console.log("This is the best person ever")
// }
// sumit()

// Function returning something
// const greet = function(){

//       return "Good Morning";

// }

// Creating with Arrow Function

// const greet  = ()=>{
//     return "Good Morrning";
// }

// One liner do not require braces/return

// one line will automitcally return
// single parameter do not need parenthesis but you will have to put parenthesis if there are multiple parameters
// const greet =() => "GOod Morrning";

// const greet =() => ({name:"sumit"});

const greet = (name, ending) => "Good Morrning" + name + ending;

console.log(greet("sumit", "bye"));
