//else-if 

let score = 85;

if(score >= 80 && score <= 100){
    console.log("A+");
}else if(score >= 70 && score < 80){
    console.log("A");
}else if(score >= 60 && score < 70){
    console.log("A-");
}else if(score >= 50 && score < 60){
    console.log("B");
}else if(score >= 40 && score < 50){
    console.log("C");
}else{
    console.log("Fail");
}

//ternary operator

const age = 26;

const isAdult = age >= 18 ? "you are adult" : "you are not adult";
console.log(isAdult);


//loops
let sum = 0;
for(let i = 1; i<=10; i += 2){
    console.log("i = ", i);
    sum += i;

}
console.log("The sum of odd no from first 10 numbers is " + sum);

let j = 1;
while(j <= 10){
    console.log("j = ", j);
    j++;
}

let k = 1;
let add = 0;
let n = 10;
while(k<=n){
    add += k;
    k++;
}
console.log("The sum of first " + n + " numbers is " + add);

let sum1 = 0;
let z = 10;
for(let i = 1; i<=z; i++){
    console.log("i = ", i);
    sum1 += i;
}
console.log("The sum is " + sum1);


let sum2 = 0;
let x = 20;

for(let i = 0; i<=x; i+=2){
    sum2 += i;
}
console.log("The sum of even numbers from 0 to " + x + " is " + sum2);


let personValue = 1;
do{
    console.log("This is :" , "Shawon");
    personValue++;
}while(personValue <= 5);


let number = 1;
do{
    console.log("numbers: " , number);
    number++;

}while(number<=10);
console.log("The sum of first 10 numbers is " + number);



let number2 = 0;
let sum3 = 0;
let n1 = 100;
do{
    sum3 += number2;
    number2++;
}while(number2<=n1);
console.log("The sum of first " + n1 + " numbers is " + sum3);


let words = "Shawon";
let size = 0;
for(let val of words){
    console.log("Alphabet: " + val);
    size++;
}
console.log("The size of the string is: " + size);


let array = [1,2,3,4,5,6,7];
let totalNumbers = 0;
for(val of array){
    console.log("Numbers : ", val);
    totalNumbers++;
}
console.log("Total numbers in array : ", totalNumbers);


let fullName = "Shawon Hossain";
for(let i = 1; i<5; i++){
    console.log("Name :" , fullName);
}

let i = 1;
while(i<5){
    console.log("Name : ", fullName);
    i++;
}



let summation = 0;

for(let i = 0; i<=100; i += 2){
    summation += i;
}
console.log("Sum of all even no between 1 - 100 :" , summation);



let n2 = 50;
let sum4 = 0;

for (let i = 1; i<=n2; i+=2){
    sum4 += i;
    i++;
}
console.log("Sum of all odd numbers between 1 - 50 :" , sum4);


//do while loop

let p = 10;
let sum5 = 0;
let q = 1;
do{
    sum5 += q;
    q++;
}while(q <= p);
console.log("The sum of first " + p + " numbers is " + sum5);

//function expression

let first = 5;
let second = 8;

const addition = function(a, b) {
    console.log("Sum of a and b is : ", a + b);
};

addition(first, second);



const multiply = function(a, b) {
    console.log("Multiplication of a and b is : ", a * b);
};

multiply(first, second);


const divide = function(a,b){
    console.log("Dvivision of a and b is : ", a/b);
}
divide(first, second);

const firstName = "Shawon";
const lastName = "Hossain";

const myName = function(){
    console.log("My name is : ", firstName + lastName);
}

myName(firstName , lastName);

//guessing game

// let gameNumber = 35;
// let userInput = prompt("Guess a number between 1-40");

// while(userInput != gameNumber){
//     userInput = prompt("You gussed wrong, guess again");
// }
// console.log("Guess is right !!!");



//practice string

const str = "Hello, World!";
console.log(str.length); // 13
console.log(str.charAt(7)); // "W"
console.log(str.indexOf("World")); // 7
console.log(str.slice(0, 6)); // "Hello,"
console.log(str.toUpperCase()); // "HELLO, WORLD!"
console.log(str.toLowerCase()); // "hello, world!"