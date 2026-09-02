//Overloading function : we have multiple signature but only one implementation
//There are three steps to overload a function
// step1: write a signatures of function
// step2: implements a function
// step3: calling a function

// Example : Different parameters type (datatypes)
// Function Signature : A funtion having without implementation or A function without having the body

/* function getInfo(id:number):string;
function getInfo(name:string):string; // signature of function

function getInfo(parameter:number|string):string  // implementation of function
{
    if(typeof parameter==="number")
        {
         return(`User ID is ${parameter}`);
        }
    else{
        return(`User Name is ${parameter}`)
    }
}

console.log(getInfo(155));     // calling a function
console.log(getInfo("Ameen")); */

// Example 2: Different number of parameters
/* 
function add(a:number , b:number):number;
function add(a:number , b:number , c:number):number;  // Signatures of function

function add(a:number , b:number, c?:number):number   // Here c? is optional parameter to execute both functions
{ 
    if(c !==undefined){   // c !== undefined means c is defined 
        return a+b+c;
    }
    return a+b;
}

console.log(add(10,20));
console.log(add(10,20,30)); */

// Example 3: Different return types
/* 
function processinput(input:number):number;
function processinput(input:string):string;  //signature of function

function processinput(input: number | string ): number | string   // implementation of function
{
    if(typeof input=="string")
        {
           return input.toUpperCase();
        }
    else{
        return input*2;
    }
}
console.log(processinput(20));
console.log(processinput("Ameen"));   // callback of function
 */
// Example 
/* 
function greet(name:string):string;
function greet(age:number):number;
function greet(IsMarried:boolean):boolean;  // signatures of function

function greet(input: string | number | boolean):string | number | boolean
{
    if(typeof input=="string"){
        return(`Your name is ${input}`)
    }
    else if (typeof input=="number"){
        return(`Your age is ${input}`)
    }
    else{
      let res:string=input?"Is married":"not married ";
      return res ;
    }
}

console.log(greet("Ameen"));
console.log(greet(22));
console.log(greet(true)); */





