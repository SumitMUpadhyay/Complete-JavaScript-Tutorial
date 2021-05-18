console.log("This is tutorial 30");

 const proto = {
       
    slogan: function(){
       return  `This company is the best `;
    },
    changeName:function(newName){
        this.name = newName
    }
 }


 //This creats sumit object
 let sumit = Object.create(proto);
 sumit.name = "Sumit";
 sumit.role = "Programmer"

 // This also creats sumit object
 const sumit1= Object.create(proto,{
    name:{value: "sumit", writable:true},
    role:{value:"Programmer"},
 });

 sumit1.changeName("sumit2")
//  sumit.changeName("sumit2")

//  console.log(sumit);

//Employee Constructor 

function Employee(name, salary, experience){
    this.name = name;
    this.salary= salary;
    this.experience = experience;
}

// Slogan

Employee.prototype.slogan = function(){
    return `This company is the best .Regards,${this.name}`;
}

let sumitmoney = new Employee("Sumit",4568000,87);
console.log(sumitmoney)
console.log(sumitmoney.slogan())

// Programmer 

function Programmer(name, salary, experience, Language){
    Employee.call(this,name, salary,experience);
    this.Language = Language;
}
 
// Inherit the prototype

Programmer.prototype = Object.create(Employee.prototype);

//Manually set the constructor 

Programmer.prototype.constructor = Programmer;
 let rohan = new Programmer("Rohan",2, 0,"javascript");

 console.log(rohan);