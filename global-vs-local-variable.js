// Global scope variable
var outerWear = "T-shirt";

function myOutfit() {
    // This creates a new local variable with the same name
    // Local variables take precedence over global variables within the function scope
    // This is called "variable shadowing"
    var outerWear = "Sweater";
    
    // Returns the local variable, not the global one
    return outerWear;
}

// This accesses the global variable directly
console.log(outerWear); // T-shirt

// This calls the function which returns its local variable
console.log(myOutfit()); // Sweater