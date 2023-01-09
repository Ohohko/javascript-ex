/*
JavaScript - Declaring Functions
The following exercise contains the following
subjects:
* functions
Instructions
* Please reformat the following function
declarations to function expression.
* Please reformat the following function
expressions to function declarations.
Submit the file to Hive
*/


// From function declarations to function expression

// function welcome() {
//     let welcome = 'Welcome to Appleseeds Bootcamp!';
//     return welcome;
//     }

const welcome = () => 'Welcome to Appleseeds Bootcamp!';

// ***************************

// function power(a) {
// let myNumber = a;
// let result = Math.pow(myNumber, 2);
// return result;
// }

const myNumbers = (a) => Math.pow(a, 2);
myNumbers(5);


 // ***************************
// function add(a, b = 5) {
// let myNumber = a;
// let sum = myNumber + b;
// return sum;
// }

const myNumber = (a , b) => (a + 5);
myNumber(4);


// From function expressions to function declarations

// const hello = () => "Hello!";

function hello(){
let hello = "Hello!";
return hello;
}
hello();
// ***************************
// const squareRoot = a => Math.sqrt(a);

function squareRoot(a) {
    let myNum=a;
    return Math.sqrt(myNum);
}
squareRoot(5);

    // ***************************

// const randomNumbers = (a, b) => Math.random() * (a - b) +
b;

function randomNumbers(a, b){
    let num1= a;
    let num2=b;
    return Math.random() * (num1 - num2) +num2;
}