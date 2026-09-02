// Tuples:
// A tuple is a fixed length array where each element has a specific type.
// It helps in storing multiple fields of different data types together.

// Example 1: tuple with 2 values of string , number

/* let person:[string,number]=["Ameen",155];
console.log(person[0]);
console.log(person[1]); */

// Example 2: tuple with multiple values 

let person:[ string,number,boolean,string]=["Ameen",123,true,"Shaik"];
// console.log(person);

// for traditional for loop
console.log("***Traditional for loop***");

for (let i=0;i<person.length;i++)
{
    console.log(person[i]);
}

console.log("***for in***")
for(let i in person)
{
    console.log(person[i]);
}

console.log("***for of***")

for(let values of person)
{
    console.log(values);
}

// Example : Tuple array (Array of tuple)

let students:[string,number][]=[["ameen",155],["bhai",9989]]
console.log(students[0]);
console.log(students[1]);
