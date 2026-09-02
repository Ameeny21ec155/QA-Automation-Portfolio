// TS datatypes have three types of terminologies
// TypeScript Types, Annotations & Type Inference

// 1.TypeScript type or DataType
/* 
let age:number=18; // In this `number` = TS type or DataType 
let isDone:Boolean=true; // In this `Boolean` = TS type or DataType  */

// 2.Type Annotations
/* 
let age:number=18; // In this `:number` = TS type or DataType 
let isDone:Boolean=true; // In this `:Boolean` = TS type or DataType 
//Here we manually define datatype */

// 3.Type Inference

/* let age=30;                     // TS infers `age` as `number`
console.log(typeof (age));
let isDone=true;                // TS infers `isDone` as `Boolean`
console.log(typeof isDone)
let message="Ameen";            // TS infers `message` as `string`
console.log(typeof (message))
// here in type inference type script intelligently finds datatype
*/

/* 
TypeScript DataTypes 
They are two types of datatypes
1.Primitive datatypes
  1.number
  2.string
  3.boolean
  4.null
  5.undefined
  6.any
  7.union
  8.void
2.Non-Primitive datatypes
  1.class
  2.Array
  3.Tuple 
  4.Functions
  5.Interface
  */
 
//   1.Number Type
// Represents both integers and floating point numbers

/* let age = 21;
let Phno = 7702094055;
let height = 5.6;
console.log("Age:",age)
console.log("PhNo:",Phno)
console.log("height:",height)
console.log(typeof age)
console.log(typeof Phno)
console.log(typeof height); */

// 2.String type 
// Represents textual data 
// these are three types 

/* 
1.single quote('')
2.double quote("")
3.backstick(``)
 */

/* let firstName:string="Shaik";
let lastName:string=`Ameen`;

// hello shaik ameen.

let greeting:string=`Hello ${firstName} ${lastName}`;
console.log(greeting)
 */

// 3.Boolean type represents true or false 

/* let isStudent:boolean=true;
let notDone:boolean=false;

console.log(isStudent)
console.log(notDone) */

// 4&5 Null type & undefined
// special types for absence of value

/* let age:null=null; 
let notAssigned:undefined=undefined; 
console.log(age)
console.log(notAssigned) */

//6.Any 
// allows all types of data but type-safety is voilated in this any type

/* let value:any=123;
console.log(typeof value)

let student:any=`ameen`;
console.log(typeof student) */



