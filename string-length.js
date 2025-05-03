var firstNameLength = 0;
var firstName = "Ada";

// JavaScript doesn't support negative indexing like Python
// firstName[-1] returns undefined because -1 is not a valid array/string index
// In JavaScript, string indices must be non-negative integers (0, 1, 2, etc.)
// var lastLetter = firstName[-1];  // undefined

// To get the last character, we use length - 1
// firstName.length is 3 (A=0, d=1, a=2)
// firstName[3 - 1] = firstName[2] = 'a'
var lastLetter = firstName[firstName.length - 1]; // 'a'

firstNameLength = firstName.length; // 3

var lastName = "Lovelace";
var lastNameLength = lastName.length; // 8

console.log(firstNameLength); // 3
console.log(lastName.length); // 8
console.log(lastLetter); // 'a'