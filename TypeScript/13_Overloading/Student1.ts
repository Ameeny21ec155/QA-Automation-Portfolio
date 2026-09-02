/* 
1.class
2.Read only property
3.Optional property

4.Static properties and methods
   1. static properties/ methods are common/shared across all the objects
   2. static properties/methods can be accessed through class name directly
   3. static properties / methods can be modified using class
   4. we cannot use this keyword for static properties , instead we can use class name
   
*/

class Student
{
    readonly studentID:number; // Read -only property (can only to be assigned once, inside constructor)
    name:string;    // Regular  property
    email?:string;  // Optional property (can be undefined)
    static schoolName:string="Oxford High School"; // Static variable shared among all instances/objects

constructor(sid:number,sname:string,email?:string)   
{
    this.studentID=sid;
    this.name=sname;
    this.email=email; // if you don't pass email then it is undefined
} 

// Method

displayInfo(): void{
    console.log("Student ID:",this.studentID);
    console.log("Student Name:",this.name);

    if(this.email)
    {
        console.log("Email:",this.email);
    }
    else
    {
        console.log("Email is not provided");
    }
    console.log("School Name:" , Student.schoolName); // access property using Student (class name)
}

static changeSchoolName(newName:string):void{
    Student.schoolName=newName;
}
}

// Usage

let s1=new Student(155,"Ameen");
let s2=new Student(165,"Apple","apple@gmail.com");

//Display student info
s1.displayInfo();
s2.displayInfo();

//Try to modify the studentId of s1 object.
//s1.student=111; // Cannot assign to "studentId" because it is a read-only property

//change the school name using static method

Student.changeSchoolName("Sunrise Academy")

//Display student info
console.log("Displaying student info after changing school name..")
s1.displayInfo();
s2.displayInfo();