// Inheritance:
// A class can reuse the properties and methods of another class.
// B extends A --- properties+methods (child class / derived class / Sub class)



// Parent class

class Car
{
    name:string;
    color:string;
    model:string;

    constructor(name:string, color:string, model:string)
    {
        this.name=name;
        this.color=color;
        this.model=model;
    }

    // methods

    start() {
        console.log("Car started.....");
    }

    stop() {
        console.log("Car stopped....");
    }

    displayInformation()

    {
        console.log(`Name: ${this.name} , Color: ${this.color} ,Model:${this.color}`);

    }

}


// Child class - Honda

class Honda extends Car
{
    year:number;

    constructor(name:string, color:string , model:string, year:number)
    {
        super(name,color,model);
        this.year=year;
    }

    //Method overriding
    start()
    {
        console.log("Honda started..")
    }

    yom()
    {
        console.log(`Name: ${this.name}, Color: ${this.color}, Model: ${this.model}, YOM: ${this.year}`);
    }
    
}

// child class - Maruthi

class Maruthi extends Car
{
    year:number;

    constructor(name:string, color:string, model:string, year:number)
    {
        super(name,color,model);
        this.year=year;
    }

    // Method overriding
    start() 
    {
      console.log("Maruthi started ....")    
    }

    yom()
    {
        console.log(`Name: ${this.name}, Color: ${this.color}, Model: ${this.model}, YOM: ${this.year}`);
    }
}

// Usage

//Create Honda Object

let honda=new Honda("Honda","Red","Cruise",2020);

console.log(honda.name);
console.log(honda.color);
console.log(honda.model);
console.log(honda.year);

honda.start(); // called child class method (overrided)

honda.displayInformation(); // Parent class

honda.stop(); // This is called from parent class

honda.yom(); // called from child class itself

// Create maruthi class object

let maruthi=new Maruthi("Maruthi","White","Desire",2020);

maruthi.displayInformation(); // called from parent class

maruthi.yom();   // itself from child class

maruthi.start(); // itself from child class

maruthi.stop();  // called from parent class

// Parent class variable is holding child class object

let car:Car=new Honda("Honda","Red","City",2020);

car.displayInformation();

car.start();

// car.yom(); // Not accessible yom() defined inside the child class but not there in the parent

