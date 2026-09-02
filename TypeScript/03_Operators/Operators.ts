// 1.Arthmetic Operators

let a:number=10 , b:number=20; // Instead of writing multiple statements we can write like this one line
console.log("****Arthemetic Operators****")

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(b/a); // Division here quotient is answer
console.log(a%b); // Modular division here remainder is answer
console.log(a**b);// In this square is taken (exponential) 

//2.Assignment Operators (Short hand operators)
// a+=b can be written as a=a+b
console.log("****Assignment Operator****")
a=20;
b=10;
console.log(a+=b); // updated a value --> 30
console.log(a-=b); //                 -->20
console.log(a*=b); //                 -->200
console.log(a/=b); //                 -->20
console.log(a%=b);

// 3.Relational Operators (Comparison Operators) this gives o/p in boolean type 
console.log("****Relational Operators****")

a=10;
b=20;
console.log(a<b); // true
console.log(a>b); // false
console.log(a<=b);//true
console.log(a>=b); //false
console.log(a==b); //false
console.log(a!=b);//true

//Difference b/w ==(Equality )  & ===(Strict Equality)
console.log("Difference b/w ==(Equality )  & ===(Strict Equality)")
let num1:any=10; //number type
let num2:string="10"; //stirng type

console.log(num1==num2); // true (this compares only values)
console.log(num1===num2); // false (this compares both values & types)

/* 
4.Logical Operators 
Returns true or false (boolean type )
works b/w boolean variables
&&(AND) - both true then only true
||(OR)  - alteast one true then only true
!(NOT)  - opposite 

b1     b2        &&      ||      !
----------------------------------------
true   true     true    true     fasle
true   false    false   true
false  true     false   true     true
false  false    fasle   false
*/
console.log("****logical operators****")
let b1:boolean=true;
let b2:boolean=false;
console.log(b1 && b2)  //false
console.log(b1 || b2)  //true
console.log(!b1)       //false
console.log(!b2)       //true

console.log("****Combination of relational & logical operators****")
console.log(10>5 && 10<5) // false
console.log(10>5 && 5<10) // true


