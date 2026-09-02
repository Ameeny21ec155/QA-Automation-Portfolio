//Parent class

class Person
{
    public name : string; // public property - accessible anywhere
    protected age : number; // protected property - accessible within the class and its subclass
    private ssn:number; // private property - accessible only within the class

constructor(name:string, age:number , ssn:number)
{
    this.name=name;
    this.age=age;
    this.ssn=ssn;
}

displayInfo()
{
    console.log(this.name);
    console.log(this.ssn);
    console.log(this.age);
}
}

//Child class

class Employee extends Person
{
    private employeeId:number;

    constructor(name:string,age:number,ssn:number,employeeID:number)
    {
        super(name,age,ssn);
        this.employeeId=employeeID;
    }

    showEmployeeDetails()
    {
        console.log(this.name); // public - accesible
        console.log(this.age); // protected - accesible
        // console.log(this.ssn); // private - only accessible in class
        console.log(this.employeeId); // private , still we can access since it is declared inside the same class

    }

}

let emp=new Employee("Ameen",24,999389,101);

emp.displayInfo();
emp.showEmployeeDetails();

console.log(emp.name); // accessible
// console.log(emp.age); // not  accessible
// console.log(emp.ssn); // not accessible

