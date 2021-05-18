console.log("Welcome to tutorial number 27");


// Object Literal For Creating Object
let car = {
    name: 'Maruti 800',
    topSpeed:89,
    run:function (){
        console.log("car is running");
    }
}
// We have already seen constructor like  these 
// new date();

// Creating a constructor for the cars

function GeneralCar (givenName, givenSpeed){
    this.name=  givenName;
    this.topSpeed = givenSpeed;
    this.run = function(){
        console.log('${}this.name} is running');
    }
    this.analyze = function(){
        console.log(`This car is slower by ${200-this.topSpeed} km/H than Marcedes`)
    }
}

car1 = new GeneralCar('Nissan',180);
car2 = new GeneralCar('Maruti Alto',80);
car3 = new  GeneralCar('Mercedes',2000);
// console.log(car1); 
console.log(car1, car2, car3);