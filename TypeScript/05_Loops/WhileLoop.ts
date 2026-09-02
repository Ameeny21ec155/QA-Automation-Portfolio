// While Loop :- A while loop executes as long as the condition is true

// Syntax:
/* let i:number=1;  // intilizatio
while(){
    statements;
} */

// Example print 1 to 10 numbers

let n:number=1;
while(n<=10){
    console.log(n);
    n++;
    
}

//Example : To even numbers from 1 to 10

// let i:number=2;
// while(i<=10){
//     console.log(i);
//     i+=2;
    
// }

// method2

let z:number=1;
while (z<=10){
    if(z%2==0)
        {
        console.log(z);
    }
    z++;
}

// To print odd numbers
let p:number=1;
while (p<=10){
    if(p%2!=0){
        console.log(p);
    }
    p++;
}

// print numbers 10,9,8,......1(Desecnding order)

let m:number=10;
while(m>=1){
    console.log(m);
    m--;
}


