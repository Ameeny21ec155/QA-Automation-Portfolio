// Call Back Function : A function is passed as an argument to another function and execute later

// Example 1
// Function that takes callback function as an parameter
/* 
function greet(name:string , callback:(message:string)=>void)
{
    console.log(name);
    callback("Hello");
}
//callback function
function shortmessage(message:string)
{
    console.log(message)
}
// calling the function by passing the callback function
greet ("Ameen" , shortmessage); */

//Example 2
function sum(a:number,b:number,callback:(result:number)=>void){
    let result=a+b;
    callback(result);
}
// call back function 
function displayresult(result:number):void
{
    console.log(result);
}
sum(10,20,displayresult);