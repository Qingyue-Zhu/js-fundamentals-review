/* Data Types: undefined, null, boolean, string, symbol, number, and object */

// var - can be redeclared and reassigned
// - function-scoped (or globally scoped if declared outside a function)
// - hoisted to the top of their scope
var myName = "Jessica";
myName = 22;  // reassigning is allowed

// let - cannot be redeclared but can be reassigned
// - block-scoped (limited to the block, statement, or expression)
// - not hoisted (temporal dead zone)
let ourName = "freeCodeCamp";
// let ourName = "something else"  // this would cause an error (cannot redeclare)
// ourName = "newValue"  // this is allowed (can reassign)

// const - cannot be redeclared or reassigned
// - block-scoped (like let)
// - must be initialized when declared
// - not hoisted (temporal dead zone)
const pi = 3.14
// pi = 3.15  // this would cause an error (cannot reassign)
// const pi = 3.15  // this would cause an error (cannot redeclare)


// Hoisting example with var:
console.log(myVar);  // Output: undefined (no error!)
var myVar = 5;

// The above code is interpreted by JavaScript as:
var myVar;  // declaration is "hoisted" (moved) to the top
console.log(myVar);  // undefined
myVar = 5;  // assignment stays in place

// But with let/const:
console.log(myLet);  // Error: Cannot access 'myLet' before initialization
let myLet = 5;

// This area before let/const declaration is called "temporal dead zone"

var myStr = "I am a \"double quoted\" string inside \"double quotes\"";
console.log(myStr)