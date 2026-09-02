// Named Function : A funtion that is declared with a name

// Syntax :
 
// function function name(parameter):returnType {  // declaring the function
//     //block of code
// } 

// function name();  -> calling the function

// Ex1: A named function with no parameter and no return type 

// function dispaly():void {
//     console.log("Welcome to typescript")
// }
// dispaly();

// Ex2: A named function with parameter and return type

// function addNumbers(x:number , y:number): number{
//     return x+y;
// }
// // let result:number=addNumbers(2,8);  method one to call function
// // console.log(result)

// console.log(addNumbers(2,3));

//Ex3: Named function with rest parameters  -> Same type
// rest parametrs means considering multiple parameters in a funtion to perform specific task
// or for n no.of parameters and no limit parametes

/* function addNumbers(...nums:number[]){
    let i=1;
    let sum:number=0;

    for(i=0;i<nums.length;i++){
        sum = sum+nums[i];

    }
    console.log("sum of the numbers",sum)
}
addNumbers(1,2);
addNumbers(1,2,3,4);
addNumbers(1,2,3,4,5); */

// Ex4: Named function with rest parameters -> multiple types

/* function findElements(...elements:(number | string)[]):number{
      return elements.length;
}
console.log(findElements(1,"ameen",3,4,"bujji")); // Both types
console.log(findElements(1,2,3,4,5,6)); // only numbers
console.log(findElements("am","ee","n","sha","ik")); //only string */

// Ex:5 Named function with optional parameters -> the parameter which we can pass or skip it is optional
/* function displayDetails(ID:number, Name:string , mailID?:string){
    console.log("ID :",ID);
    console.log("Name :",Name);
    if(mailID   !==undefined){
    console.log("EmailID :",mailID)
    }
}
displayDetails(155,"Ameen","Ameen@gmail.com")
displayDetails(156,"bujji")
 */

// Ex 6: Named function with default parameters

/* function calculateDiscount(price:number,rate:number=0.50) : void{ // by deafault assigning a vlaue to parameter
    let discount:number = price*rate;
    console.log("Discount = ",discount)
}
calculateDiscount(1000,0.30);
calculateDiscount(10000) */
