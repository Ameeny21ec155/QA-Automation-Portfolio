// Object - object contains properties and behavior.
// Object contains variables & methods.
// ** Object is collection of key and value pairs.


//Ex: Employee -- name, designation , sal , dep
//                       bonus() , getdetails(), setdetails()

//student - name , sid, grade
//              getdetails(), setdetails()

//Different ways to create an object in JS/TS
// 1. using 'object' type - Directly define the values for variable (JS/TS)
// 2. Inline type object - we also define the datatype of the keys (TS)
// 3. Using type aliases (JS/TS)
// 4. Using the classes(JS ES16/TS)


//1. using 'object' type - Directly define the values for variable
// The Typescript 'object' type represents all values that are not in primitive types.

//  let employee:object = {
//      name:"Ameen",
//      age:23, 
//      salary:500000, 
//      job:"Engineer"
//     } 



// Ex1: Student 

console.log("** Using object type **");

let student = {
    sname:"amith",
    sID:155,
    course:"computers",
    getSdetails : function(){
        return `Student name: ${this.sname} ID is ${this.sID} and course is ${this.course}` ;
    }
}

console.log(typeof student);

// accessing object - approach 1(using dot notation)

console.log(student.getSdetails());   // calling the mthod  

console.log(student.sname , student.sID,student.course); // dirct access

// accesing object - approach 2 (using bracket notation)

console.log(student["sname"],student["sID"],student["course"]);

// Modify the value

student.course="ECE";

console.log("Modified course is:",student.course);

//====================================================

//2. Inline Type object - we also define datatypes of the keys (TS)

// Ex1:

console.log("** Inline **");
let student2:{
    name: string,
    age: number,
    grade : string,
    getSummary:()=> string
} =
{
    name:"Ameen",
    age:23,
    grade:'A',
    getSummary:function()
    {
        return `${this.name} is ${this.age} years old and scored grade ${this.grade}`;
    }
}

console.log(student2.getSummary());



// Problem with Inline object :To write another students data we  need to repeat structure for every object
// to overcome this we have type alias

//3.Using 'type' aliases - allows creating a new name for an existing type

// Example 1:

type Product ={          // type
    name:string,
    price:number,
    getInfo: ()=>string

};

console.log("***book1*** # type aliases")

let book1:Product =      // objects
{
    name:"Learn java",
    price:120,
    getInfo: function () {
        return`${this.name} costs ${this.price}`;
        
    }

}    

console.log(book1.getInfo());

console.log("***book2 # type aliases ***");

let book2:Product=
{
    name:"Playwright",
    price:155,
    getInfo:function(){
        return `${this.name} costs ${this.price}`
    }
}

console.log(book2.getInfo());

// Example 2:

type Personal={
    name:string,
    age:number,

};

type conatact={
    email:string,
    phone:number,
}

type Candidate = Personal & conatact &
{
    getContactInfo:()=>string
}

let cand:Candidate={
    name:"Ameen",
    age:23,
    email:"ameen@gmail.com",
    phone : 7702094055,
    getContactInfo:function(){
        return `${this.name} can be contacted at ${this.email} or ${this.phone}`;
    }
}

console.log(cand.getContactInfo());


// 4. Using the clases 

class Person {
    ssn: string;
    firstName: string;
    lastName: string;

    constructor(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getfullname(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    getDetails(): string {
        return `SSN: ${this.ssn}, Name: ${this.getfullname()}`;
    }
}

let person1 = new Person("one", "amin", "shaik");
console.log(person1.getDetails());

let person2 = new Person("two", "ameen", "shaik");
console.log(person2.getDetails());

let person3 = new Person("three", "bhai", "shaik");
console.log(person3.getDetails());
console.log(person3.getfullname());

    



