console.log("Welcome To Tutorial 44");

// Pretend this is coming from a server as responce

let a = "sumit upadhyay";
a = undefined;
if (a != undefined) {
  throw new Error("This is not undefined");
} else {
  console.log("THis is undefined");
}


try {
    // sklflkaflkAWJfWQjfkl
    functionsumit();

    console.log("We are inside try block")
   
} catch (error) {
    console.log("Are you okay?")
    console.log(error.name);
    console.log(error.message);
    
}

finally {
  console.log("This line of code will be executed");
}
