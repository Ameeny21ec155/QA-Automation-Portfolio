// string - Text value or a combination of characters
/*
1.single quote - Stirng literal ('Single Quote')
2.double quote - string literal ("double quote")
3.backtick(``) - string template - `when we try to use a string variable inside another string value ${varaible}
*/

let str1:string='This is a string with single quote';
let str2:string="This is a string with double quote";
let str3:string=`This is a string with back tick `;

// console.log(str1);
// console.log(str2);
// console.log(str3);

//When to use back tick ``

let num:number=10;

console.log()

// string methods

let str:string="Hello Typescript!!"

// 1. length(attribute) - find the length of string

console.log("Lenght of a string:",str.length);

// 2. toUppercase() and toLowercase()

console.log("This is lower case:",str.toLowerCase()); // to convert all characters into lower case

console.log("This is upper case:",str.toUpperCase()); // to convert all characters into upper case

// 3. charAt() and indexof()

console.log(str.charAt(4));

console.log(str.indexOf("Type"));

// 4. substring()

// str.substring(starting index , ending index) (ending index is exclusive)

console.log(str.substring(6,9));

// 5. includes() - returns true or false 
// string value is case sensitive

console.log(str.includes("abc")); // Not exists in string (false)

console.log(str.includes("Hello")); // Exists in string (true)

// 6. startswith() and endwith() - returns a boolean value (true/false)

console.log(str.startsWith("Hello")); //(true)

console.log(str.endsWith("!!"));  // (true)

// 7. replace()

// str.replace("The character which we need replace in string","new characters which will want to replace")

console.log(str.replace("Typescript","World"));

// 8. split() - break the string into multiple parts based on the delimeter , returns an array

//Ex1:

let words:string[]=str.split(" ");
console.log("After splitting :",words);

//Ex2:

let mystring:string="abc@gamil.com,xyzabc";

let arr=mystring.split(",")
console.log("Email:",arr[0]);
console.log("Password:",arr[1]);

// trim() , trimstart() and trimend()

mystring="   Welcome to mystring   ";

console.log(mystring); // Original string

console.log(mystring.trim()); // it trim the spaces

console.log(mystring.trimStart()); // this method removes spaces at starting

console.log(mystring.trimEnd()); // this method removes spaces at ending

// 10. concat() 

str1="welcome";

str2="to typescript";

str3="javascript";

// console.log(str1.concat(str2)); // welcome typescript

// console.log(str1+str2); // this alternative but not recomended

// console.log("welcome".concat("to typescript"));

// console.log(str1.concat(str2).concat(str3)); // to concat 3 strings

// concept of string immutability

//num=10;

let res=num+5;

console.log(num); // string is immutable so original value cannot change

console.log(res); // 15

// Ex2:

let modifiedstring=str1.concat("to typescript");

console.log(str1); // welcome 

console.log(modifiedstring);

// Multiline string

let multiline:string=`welcome to 
playwright`;    // to write multi line strings backtick is used

console.log(multiline);