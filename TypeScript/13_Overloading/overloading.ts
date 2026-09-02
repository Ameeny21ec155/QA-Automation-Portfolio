// Method Overloading and Constructor Overloading in Typescript

class Calculator
{
    constructor(); // default constructor
    constructor(a:number , b:number); //parameterized constructor

    constructor(a?:number , b?:number)
    {
        if(a!==undefined && b!==undefined)
        {
            console.log("Sum of a & b:",(a+b));
        }
        else
        {
            console.log("Default constructor called..")
        }
    }

    // Method Overloading

    add(a:number,b:number):number;
    add(a:number,b:number,c:number):number;

    add(a:number,b:number,c?:number):number
    {
        if(c!== undefined)
        {
            return a+b+c ;
        }
        return a+b;
    }
}

// usage 
// Constructor overloading
let calc1=new Calculator();
let calc2=new Calculator(10,20);


// methods overloading

console.log("Adding 2 numbers:",calc1.add(10,20));

console.log("Adding 3 numbers:",calc2.add(10,20,30));
