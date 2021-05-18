console.log("This is tutorial 57");

// Maps in JavaScript: We can use any type of key and value

const myMap = new Map();

const key1 = "myStr",
  key2 = {},
  key3 = function () {};

// Setting map values

myMap.set(key1, "This is string");
myMap.set(key2, "This is a blank obj");
myMap.set(key3, "This is an empty function");
console.log(myMap);

// Geeting the value from a Map 

let value1 = myMap.get(key2);
console.log(value1);


// Get the size of the map

console.log(myMap.size);

// You can loop using for .. of to get keys and values 

for(let[key,value] of myMap){
    console.log(key, value);
}

// Get only keys 
for(let key of myMap.keys()){
    console.log('key is', key);
}

for(let value of myMap.values()){
    console.log('value is', value);
}


// You can loop through a map using for each loop 

myMap.forEach((value, key)=>{
    console.log('key is ', key);
    console.log('Value is ', value);
})

// Converting map to  an array 

let myArray = Array.from(myMap);
console.log('Map to array is ', myArray);


// Converting map keys to  an array 

let myKeysArray = Array.from(myMap.keys());
console.log('Map toKeys  array is ', myKeysArray);

// Converting map values  to  an array 
let myValuesArray = Array.from(myMap.values());
console.log('Map to Values  array is ', myValuesArray);