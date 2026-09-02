//If condition        this condition is used when only one condition is correct and it ignore ramaining
let m:number=8;
if(m>=18)
{
    console.log("Adult")
}
// If-Else (Even or Odd program) this is used when one or more conditions are there
let x:number =6;
if(x%2==0)
{
 console.log("Even Number")
} 
else 
{
 console.log("Odd Number")
}

// Nested-if this is used for multiple statements
let marks:number=50;
if(marks>=90 && marks<=100)
{
    console.log(`$(marks) A Grade`)
}
else if (marks>=70 && marks<=90)
{
    console.log(`$(marks) B Grade`)
}
else if (marks>=45 && marks<=70)
{
    console.log(`$(marks) C Grade`)
}
else 
{
    console.log(`$(marks) Fail`)
}

// example2
let browser:string = "firefox"
if (browser==="chrome")
{
    console.log("Browser is Chrome")
}
else if (browser=="firefox")
{
    console.log("Browser is Firefox ")
}
else if(browser=="Webkit")
{
    console.log("Browser is Webkit")
}
else
{
    console.log("Invalid browser")
}

// Switch expression
let day:number=1;

switch(day)
{

case 1: console.log("Sunday");
break;
case 2: console.log("Monday");
break;
case 3: console.log("Tuesday");
break;
case 4: console.log("Wednesday");
break;
case 5: console.log("Thursday");
break;
case 6: console.log("Friday");
break;
case 7: console.log("Saturday");
break;
default:console.log("Invalid Day");
break;
}