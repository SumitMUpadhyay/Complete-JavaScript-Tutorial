console.log("Welcome to tutorial 39");

//Promise: best video on promises
//-resolve
//-reject
//-pending

function func1() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const error = true;
      if (!error) {
        console.log("Function:Your promise has been resolve");
        resolve();
      } else {
        console.log("Function:YOur promise has not been resolve");
        reject("Sorry not fulfilled");
      }
    }, 2000);
  });
}


func1().then(function(){
    console.log("Sumit: Thanks for resolving")
}).catch(function(error){
    console.log("Sumit: Very bad bro.Reason:"+error)
})