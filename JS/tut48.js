console.log("Welcome To tutorial 48");

// Regular Expression
// Basic functions
// Metacharacter Symblos
// Character Sets - We use []

// regx = /s[a-z]umit/; // can be any character from a to z
// const regx = /s[aty]umit/;
// regx = /s[aty]umit/; // can be a , t or y
// regx = /s[a-zA-Z]rr[yu0-9][0-9]/; // we can have as many character sets as we want

// Quantifiers

regx = /sum{2}it/;  // m can occur exactly two times
regx = /sum{0,2}t/; // m can occur exactly 0 to 2 (0 or 1 or 2) times

// Groupings - we use paranthesis for groupings ()
regx = / (sum){2}([0-9]m){3}/;
const str = "summmit money";

let result = regx.exec(str);
console.log("The result from exec", result);

if (regx.test(str)) {
  console.log(`The string ${str} matches the expression ${regx.source}`);
} else {
  console.log(
    `The string ${str} does not  matches the expression ${regx.source}`
  );
}
