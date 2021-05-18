console.log("Welcome To Tutorial 49");
// Character classes 
// let regx = /s[a-z]umit/;
let regx = /\wmmi/; // word character - _or alphabet or numbers 

str = "sumsum1m4m5m money";


let result = regx.exec(str);
console.log("The result from exec is",result);

if(regx.test(str)){
    console.log('The string ${str} matches the expression ${regx.source}');
}
else{
    console.log('The string ${str}does not match the expression ${regx.source}');
}