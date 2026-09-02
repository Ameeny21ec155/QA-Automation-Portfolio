/* 
 1. An interface in Typescript is a way to define the structure of an object.
 2. It tells the compiler what properties and types an object should have.
 3. It's like a blueprint for objects.

 Abstract method: we only signature of the method (there is no implementation)

 interface InterfaceName
 {
 properties
 abstract methods
 }

 1 Regular properties 
 2 Optional properties 
 3 Readonly properties & function types
 4 Extending interfaces
 5 Class implemets interface

*/

// Ex 1: Basic interface


interface Person 
{
    name:string;
    age:number;
}

let student:Person =
{
    name:"Ameen",
    age:23
}

console.log(student.name);
console.log(student.age);
console.log(student);

// Ex2: Optional property

interface Employee
{
    empId:number;
    empName:string;
    edeprtment?:string; // optional property
}

let emp:Employee=
{
    empId:101,
    empName:"Ameen"
}

let emp1:Employee=
{
    empId:102,
    empName:"Bujji",
    edeprtment:"Accounts",
}

console.log(emp.empId,emp.empName,emp.edeprtment);
console.log(emp1.empId,emp1.empName,emp1.edeprtment);

//Example 3: Readonly property (readonly to prevent modification) & Function type

interface Book
{
    title:string;
    readonly isbn:string


    display():void;
}

let b1: Book=
{
    title:"learnPlaywright",
    isbn : "123-ABC",

    display()
    {
        console.log(b1.isbn , b1.title);
    }
}


console.log(b1.title); // Learn playwright
console.log(b1.isbn); // 123-ABC
b1.display();

console.log("After changing values...");

b1.title="Learn Typescript";
console.log("After changing title:",b1.title);

//b1.isbn="123-XYZ"; // Error : Cannot assign to 'isbn' because it is a read-only property


// Ex 4: Extending Interfaces (Inheritance is applicable)

//Parent interface


/*

interface Animal
{
    name: string;

}

//child interface
interface Dog extends Animal{
    color:string;
}

// Object for interface

let mydog : Dog ={
    name:"Chintu",
    color:"Black"
}

console.log(mydog.name,mydog.color);


*/

// Example 5:

// class can extends another class
// interface can extends another interface

// class can implement interface

interface Animal{
    name:string;
    sound():void;

}

class Dog implements Animal {
    name: string;  // inherited from interface Animal
    color:string;  // property belongs to dog

    constructor(name:string, color:string)
    {
        this.name=name;
        this.color=color;

    }

    sound()
    {
        console.log("**Bark****")
    }
}

let pet=new Dog("Tommy","Black");
console.log(pet.name);
console.log(pet.color);
pet.sound();
