// super() - used to invoke immediate parent class constructor
// super - used to invoke immediate parent class method
// super - cannot be used to invoke the parent class properties , but in java it is possible


class Parent{
    num:number=10;
    constructor()
    {
        console.log("This is Parent class constructor..")
    }

    display()
    {
        console.log("This is display() method from parent class..")
    }
}

class Child extends Parent {
    num:number=20;  // property overriding // Overridden

    constructor()
    {
        super(); // this will call parent class constructor (must be called)
        console.log("This is child class constructor")
    }

    show()
    {
        // console.log(super.num); 
        // parent's num // TS doesn't supprot super.num to access parent class properties directly like java does.
        console.log(this.num);
        console.log("This is show() method from child class");

    }

    // Overrided method

    display() {
        super.display();
        console.log("This is dispay() method from child class..")
    }
}

let c1=new Child();

c1.display();

c1.show();