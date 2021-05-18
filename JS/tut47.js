console.log("Welcome To Tutorial 47");

let regx = /sumit/;

// lets look into some metacharacter symbols

regx = /^s/; //^ means expression will match if "string  start with "

regx = /it$/; // $ at the end of the string means  "string ends with "

regx = /s.umit/; // Matches any one character

regx = /s*umit/; // Matches any 0 or more character 

regx = /sa? umit?/; // ? after the character means that character is optional

regx = /h\*umit

let str = "sumit is awesome boy and sumit code with sumit";

let result = regx.exec(str);
console.log("The result from exec",result);

if(regx.test(str)) {
    console.log(`The string ${str} matches the expression ${regx.source}`)
}

else{
    console.log(`The string ${str} does not  matches the expression ${regx.source}`)
}