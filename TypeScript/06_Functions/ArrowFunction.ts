// Arrow functions or Lambda Functions
///// Arrow Functions/Lamda Function
/* 
Lambda refers to anonymous functions in programming.
Lambda functions are a concise mechanism to represent anonymous functions.
These functions are also called as Arrow functions.
There are 3 parts to a Lambda function.

1. Parameters A function may optionally have parameters
2. The fat arrow notation/lambda notation (=>) It is also called as the "goes to operator"
3.Statements represent the functions instruction set

Syntax:
let variable = (parameters] =>
{
// block of code
}
variable();
*/
// Ex : Arrow function with no parameters and no return type
// let greet=():void =>
// {
//     console.log("Hello TypeScript");
// }
// greet();

// Ex: Arrow function with paremeters and return value
/* let add=(a:number , b:number):number =>
{
    return a+b;
}
console.log(add(10,20)); */

//Ex: Arrow function with implicit return
// no need of curly brackets if it consists only one retuen type value

/* let add=(a:number , b:number) :number => a+b;
console.log(add(10,20));

let multiply=(x:number , y:number) :number => x*y;
console.log(multiply(10, 5)); */

// Arrow function with optional parameters
/*  let displayDetails=(ID:number, Name:string , mailID?:string):void =>
    {
    console.log("ID :",ID);
    console.log("Name :",Name);
    if(mailID  !==undefined){
    console.log("EmailID :",mailID)
    }
}
displayDetails(155,"Ameen","Ameen@gmail.com")
displayDetails(156,"bujji") */
// Arrow function with default parameters

 /* let calculateDiscount=(price:number,rate:number=0.50) : void =>
    { 
    let discount:number = price*rate;
    console.log("Discount = ",discount)
}
calculateDiscount(1000,0.30);
calculateDiscount(10000)  */


// Arrow function with rest parameters -> multiple types

let findElements=(...elements:(number | string)[]):number =>
    {
      return elements.length;
}
console.log(findElements(1,"ameen",3,4,"bujji")); // Both types
console.log(findElements(1,2,3,4,5,6)); // only numbers
console.log(findElements("am","ee","n","sha","ik")); //only string 