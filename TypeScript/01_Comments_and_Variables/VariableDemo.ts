/* // 1.Var Scope in this case inside block scope and functional scope both works
function exampleVar() { 
    if (true) { 
        var message = "Hello, World!"; 
        console.log(message); // Works!
    } 
    // console.log(message); // Works! 
} 
exampleVar(); // Output: "Hello, World!" */

/* // let & const Scopes
function exampleLetConst() { 
    if (true) { 
        let message = "Hello, let!"; 
        const greeting = "Hello, const!";
        console.log(message);  // (works inside the block scope)
        console.log(greeting); // (works inside the block scope)
    } 
    // console.log(message);  // Error: Not accessible outside block 
    // console.log(greeting); // Error: Not accessible outside block 
} 
exampleLetConst();  */

/* // 2. Value Assignment and Declaration
var b 
console.log(b); // Output: undefined 
 
let d; 
console.log(d); // Output: undefined 
 
const f; //   Error: Missing initializer in `const` declaration 
const g = 60; //    Works because value is assigned at declaration */

/* // 3.Re-Declaration
var city = "New York"; 
var city = "Los Angeles"; //    Allowed (Problem: Can cause bugs!) 
console.log(city);
 
let country = "USA"; 
//  let country = "Canada"; //   Error (Safer!) 
 
const planet = "Earth"; 
// const planet = "Mars"; //   Error (Safer!)  */

/* // 4.Re-Assignment
var age = 25; 
age = 30; //    Allowed 
console.log(age);

let score = 50; 
score = 60; //    Allowed 
console.log(score)

const pi = 3.14; 
// pi = 3.14159; //   Error (Cannot change a constant) 
console.log(pi) */

