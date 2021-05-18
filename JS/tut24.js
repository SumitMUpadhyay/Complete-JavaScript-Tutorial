console.log("Welcome to tutorial 24");

let today = new Date();
// console.log(today);
// console.log(typeof today);

let otherDate = new Date('8-4-2003  04:54:08')
console.log(otherDate);
otherDate = new Date('june 13 1976');
otherDate = new Date('09/16/1976');
// console.log(otherDate);
let a;
// a = otherDate.getDay();
a = otherDate.getDate();
a = otherDate.getMinutes();
a = otherDate.getSeconds();
a = otherDate.getHours();
a = otherDate.getMilliseconds();
a = otherDate.getMonth();
// console.log(a);
otherDate.setDate(23);
otherDate.setMonth(1);
otherDate.setFullYear(0);
otherDate.setFullYear(1900);
console.log(otherDate);