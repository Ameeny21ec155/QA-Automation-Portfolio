/*   Arrays in TypeScript
- An Array is a special type of variable that stores multiple values 
- The values can be of the same data or different data types
- Arrays are declared using '[]' or the generic 'Array<T>' type.
- Arrays are an ordered collection of elements.
- Indexing starts from 0
- Array is dynamic type so we can write infinite values

*/

// Approach 1 : using leterals
/* 
let names:string[]=[]; // declaration

names[0]="Ameen";      // initilization
names[1]="Bujji";
names[2]="Shaik"; */
/* 
let names:string[]=["Ameen","Shaik","Bhai" ,"Bujji"]

console.log(names); */

// Approch 2 : using generic Array<T> type

let empname:Array<string>=["Ameen","Bhai","shaik"];
/*
let Id:Array<number>=[11,12,13,14,15];
let nameId:Array<number | string>=[155,"Ameen"];
let detials:Array<any>=[12 , "ameen" , true]
console.log(empname);
console.log(Id);
console.log(nameId);
console.log(detials); */

// example 1 : iterating an array using traditional for loop

/* for(let i=0;i<=empname.length-1;i++)   // i<empname.length
{
    console.log(empname[i]);
} */

// example 2: iterating using the " for ..in " loop(indexes)

/* for(let i in empname){           // here i is acted index  value
    console.log(empname[i])      // this follows indexing concept
} */

// example 3 : iterating using the "for ..of"
/* 
for(let values of empname){      // captures data directly one by one
    console.log(values)
} */

// Example : Passing an Array to the function
// Search an element in a array using function
/* 
function search(ele:number, arr:number[]):boolean
{
  
for(let i=0;i<arr.length;i++)  
{
    if(arr[i]===ele)
    {
        return true; // element found
    }
}  
return false;  
}
let arr:number[]=[10,20,30,40];
console.log(search(30,arr));
console.log(search(80,arr)); */

// Example 5: A function takes an array and returns as returns
/* 
function capitalwords(arr:string[]):string[]
{
    let result:string[]=[];
    for(let i=0;i<arr.length;i++)
    {
       result[i]=arr[i].toUpperCase();
    }
    return result;
}
let words:string[]=["ameeN","SHaik"];
console.log(capitalwords(words)); */


