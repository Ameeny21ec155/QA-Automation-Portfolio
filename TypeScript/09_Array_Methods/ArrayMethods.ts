let numbers:number[]=[1,2,3,4,5];
let fruits:string[]=["Apple","Grape","Banana","Mango","Orange"];

console.log("Numbers array:",numbers);
console.log("Fruites array :",fruits);

// length-attribute (Not a method)

console.log("Size of an numbers array:",numbers.length);
console.log("Size of an fruites array:",fruits.length);

// Array Methods
// 1. push() - add single /multiple elements to the end of an array
// Syntax : array.push(element1,...elementN)

numbers.push(6,7);
console.log("After push :",numbers);

//2. pop() - Removes last element from an array
//Syntax: array.pop()

let Lastfruit=fruits.pop();
console.log("After pop:",fruits);
console.log("Removed element:",Lastfruit);

//3.shift() - Removes the 1st elemnt from an array
//Syntax: array.shift();

let firstnum=numbers.shift();
console.log("After shift:",numbers);
console.log("Removed 1st element:",firstnum);

//4.unshift() - adds single/multiple elements to the beging of an array
//syntax: array.unshift(element1,...elementN)

numbers.unshift(11,22);
console.log("After unshift:" ,numbers);

//5.concat() - combines two or more arrays of same type
//Syntax: array.concat(array1,...arrayN)

let cominedarray=numbers.concat([8,9],[10]);
console.log("concatenated array:",cominedarray);

//6.slice()-Extracts a section of an array
// starting Index starts from zero
// ending index will be exclusive .Ex: If 3 is ending index it will consider 2(3-1=2)
// Syntax:array.slice(start,end)

let extractedarray=fruits.slice(1,3);
console.log("After slice:",extractedarray);
// ['Apple','Grape','Banana',Mango']=['Grape','Banana']

//7. splice(): Adds/Removes elements from an array(from anywhere)
// Syntax: array.splice(start,deletecount,item1,...itemN)

console.log("Current elements in fruites array:",fruits);

//Ex1:

let removedelements=fruits.splice(1,2); //here 1 is starting index , 2 is represent how many elements to be removed
// fruits=['Apple','Grape','Banana','Mango']
console.log("After slice(1,2):",fruits);   //['Apple','Mango']
console.log("Removed elements:",removedelements); //['Grape','Banana']

//ex2:

fruits.splice(1,0,'pineapple','kiwi'); 
/*
 here 1 is starting number
      0 is deletion count
      pineapple,kiwi are adding from 1
*/
// This splice method is used for adding elements , deleting elements
console.log(fruits);

//8. indexof() - Finds the index of an element, If element not found then return -1
//  syntax: array.indexof(search element) or array.indexof(searchElement,Starting index)

//Ex1: 
let kiwiIndex=fruits.indexOf("kiwi");   // this is for element present in array
console.log("Index of kiwi:",kiwiIndex);

//Ex2:
let bananaIndex=fruits.indexOf("banana");  // this si for element not present in an array . For this o/p is -1
console.log("Index of banana:",bananaIndex);

//9. includes() - checks if an element exists
// true or false
// syntax: array.includes(searchElement,fromIndex)

let isBananaExists=fruits.includes('banana');
console.log("Does fruits include apple? ",isBananaExists); // false

let isKiwiExists=fruits.includes('kiwi');
console.log("Does fruits include kiwi? ",isKiwiExists); // true
// this includes() method is used to check elements is present in array or not

//10. toString() - Converts array to string
// Syntax : array.toString();

console.log(numbers);

let numbersString=numbers.toString();
console.log("Converted Array To string :",numbersString);

let myarray:string[]=['w','e','l','c','o','m','e']
console.log("Original myarray:",myarray);

let str:string=myarray.toString();
console.log("converted string:",str)