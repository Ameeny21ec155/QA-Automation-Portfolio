// ==== forEach() , map() , filter() ,reduce(), some(), every() ====

// 1. forEach() - Executes a function once for each array element
// It takes function as a parameter

//Syntax: array.forEach(function(currentValue, index, array){})

//currentvalue - The current element being processed in the array
// index(optional)- The index of the current element being processed in the array
// array(optional)- The array the current element belongs to.

//Ex1: Got index of all the fruites along with the value
/*
let fruits:string[]=['apple','banana','kiwi','mango','grape'];

console.log("Printing the fruits along with index and fruits names using for loop...");

for(let i in fruits)
{
    console.log(i,fruits[i]);
}

console.log("printing the fruits along with index and fruit names using forEach()..")

 fruits.forEach(function(element ,index ){
    console.log(`${index}`,`${element}`);
} ) 

// Using arrow fuction
fruits.forEach((element ,index )=>{
    console.log(`${index}`,`${element}`);
} )

//Ex2 

fruits.forEach((element )=>{
   console.log(element.toUpperCase());
}); */

// 2.map() - Creates a new array with the result of calling the function on every element of an array
// It takes function as a parameter
// Returns the same number of elements that we have in original array

//Syntax: array.map(function(currentvalue,index,array){})
   
//Ex1: Get square of all the numbers in an array. Ex: [1,2,3] then result should be [1,4,9]

let numbers:number[]=[1,2,3,4,5,6];
/*
let squarednum=numbers.map(function(element){
    return(element*element);
});

console.log("Original array:",numbers);
console.log("Square Numbers:",squarednum); */


//Ex2: Double each number [1,2,3,4,5] ---> [2,4,6,8,10]

/* let doubledNumber=numbers.map((element )=>{
    return (element*2)
}) */

/* let doubledNumber=numbers.map((element)=>element*2); // If you have single return statement inside the arrow function then {} and 'return' are not mandatory


console.log("Original Numbers:",numbers );
console.log("Doubled Numbers:",doubledNumber); */

//3.filter() - Creates a new array with all elements that pass/satisfy the function
// It takes function as a parameter
// Returns either same or fewer number of elements compared to original array

//Syntax: array.filter(function(currentValue,index,array){})

//Ex1: Get the only even numbers from an array

let evenNumbers=numbers.filter((num)=>{

    return(num%2==0);

})

console.log("Original array:",numbers);    // filter() method is filtering some particlar array elements based on condition and making those elemnts seperate or filter in new array
console.log("Even numbers filtered array:",evenNumbers);

//Ex2: Get the numbers greater than 3 from an array

let greaternum=numbers.filter((num)=>{
    
    return(num>3);
})

console.log("Original numbers array:",numbers);
console.log("Greater numbers array:",greaternum);

//4.reduce() - Applies a function on every element of an array and returns a single value

//syntax: array.reduce(function(accumulator, currentValue,index, array){})

// accumulator - The accumulated value from previous iteration
// currentValue - The current element being processed

//Ex1: Get the total (sum) of all the elements in an array
/* 
let total=0;

for(let i=0;i<numbers.length;i++)
{
   total=total+numbers[i];
}

console.log("Sum of all the numbers:",total); */

// Using reduce method

let reduceResult=numbers.reduce((total,element)=>{
 return(total+element);
},0); //Here 0 is default value of accumulator

console.log("Sum element in array:",reduceResult);

//5. some() - Checks if any element satisfies a condition
// Returns true if at least one element passes the condition, else false

//Syntax: array.some(function(currentValue,index,array){})

//Ex1: Check array contains negative values

let hasNegative=numbers.some((element)=>element<0);
console.log("Does array contains negative?",hasNegative); //false


let hasPositive=numbers.some((element)=>element>0);
console.log("Does array contains positive?",hasPositive); // true

// In some() one conditon should be correct but in every() all conditions should be correct both are opposite

// 6. every() - checks if all elements satisfy a condition
// Returns true if all elements pass the condition, else false 

//Ex1: Even numbers

let allEven=numbers.every((element)=>element%2==0);
console.log("Are all numbers are even?",allEven);  //false

//Ex2: All elements greater than 1

let Greterthannum=numbers.every((element)=>element>=1);
console.log("Are all numbers greater than or equal to 1:",Greterthannum)



