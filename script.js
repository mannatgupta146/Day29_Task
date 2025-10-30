// 1. Basic Operators (Arithmetic, Assignment, Increment, Decrement,
// Comparison, Logical, Bitwise)

// a
let a = 10;
let b = 3;

console.log(a+b);  //13
console.log(a-b);  //7
console.log(a*b);  //30
console.log(a/b);  //3.33

// b
let x = 5; 
x = x + 3;

console.log(x+=3)  //11
console.log(x-=3)  //8
console.log(x*=3)  //24
console.log(x/=3)  //8
console.log(x%=3)  //2

// c 
let count = 5;
console.log(count++);
console.log(++count);

// d

console.log(5 == '5')
console.log(5 === '5')

// e
console.log(10>5 && 10<20)

// f
console.log(true && false)
console.log(true || false)
console.log(!(true))

// g
console.log(5 > 3 && 10 > 8);
console.log(5 > 3 || 10 < 8)


// 2. Variable Hoisting in JavaScript

// a
console.log(m);
var m = 10;  // undefined

b
console.log(n);
let n = 10  // reference error

// c
test()
function test() { 
    console.log("hello")  // hello
} 

// d
hello()
var hello = function() { 
    console.log("hi")  //undefined
}

// hoisting
// when we create a variable it is break down into two parts declared part and initialized part
// and declared part goes at the and the other remain as it is 


// 3. Conditional Operators (if, else, else-if, ternary, switch)

// a
var age = 20;
if(age > 18) {
    console.log ("Adult")
}
else{
    console.log("Minor")
}

// b
let marks = 69;
marks >= 90 ? console.log("A grade") : marks >= 75 ? console.log("B grade")  : marks >= 50 ? console.log("C grade") : console.log("fail")

// c
let city = "Bhopal";
if(city === "Bhopal"){
    console.log("MP");
}
else if(city === "Bhopal"){
    console.log("MP");
}
else{
    console.log("Unknown City");
}

// d
let score = 40;
score > 35 ? console.log("pass") : console.log("fail")

// e
let temp = 17;
temp>30 ? console.log("hot") : console.log("pleasant")

// f
let name = 2;
switch(name){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

// g
let country = "India";
if(age > 18 && country === "India"){
    console.log("Eligible to vote")
}
else{
    console.log("not eligible")
}