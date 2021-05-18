console.log("Welcome to tutorial 28");

// Object literal : object.prototype

let obj = {
  name: "sumit",
  channel: "Code With Sumit",
  address: "Mars",
};

function obj(givenName) {
  this.name = givenName;
}

obj.prototype.getName = function () {
  return this.name;
};

let obj2 = new obj("Anjali");

console.log(obj2);
