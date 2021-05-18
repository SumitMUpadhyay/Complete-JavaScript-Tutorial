console.log("This is Tutorial 58");


// Set store unique values
const mySet = new Set(); // initalize an empty set 
console.log("This set looks like this",mySet);

// Adding values to the set 

mySet.add('this');
mySet.add('My name');
mySet.add('this');
mySet.add('345');
mySet.add('that');
mySet.add('true');
mySet.add('false');
console.log("This set looks like this now ",mySet);

// Use a constructor to initalize a set 
// let mySet2 = new set ([1, 45, 'this', false , {a:4 , b:8}]);
// console.log("New Set ",mySet2);

console.log(mySet.size); // Get the size of the set 
console.log(mySet.has(34)); // Check whether set has 34 or not 

console.log('before removal', mySet.has('that'));
mySet.delete('that' ); // Remove an element from  the set 
console.log('After removal',mySet.has('that')); 

// Iterating a set 
// for(let item of mySet){
//     console.log('Item is :', item);
// }

mySet.forEach((item)=>{
    console.log('Item is :' , item);
})