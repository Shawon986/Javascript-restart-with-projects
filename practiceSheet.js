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