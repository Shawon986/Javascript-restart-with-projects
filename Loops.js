//for loop

//print numbers from 0 to 4
for(let i = 0; i < 5; i++){

    console.log("The number is " + i);
}

//print odd numbers from 1 to 10
for(let i = 1; i < 10; i += 2){
    console.log("The number is " + i);
}

//print sum of n numbers
let n = 10;
let sum = 0;
for(let i = 0; i <= n; i++){
    sum += i;
}
console.log("The sum of first " + n + " numbers is " + sum);


//while loop
//print numbers from 0 to 4
let i = 0;
while(i < 5){
    console.log("i = ", i);
    i++;
}

//print odd numbers from 1 to 10

let j = 1;
while(j < 10){
    console.log("j = ", j);
    j += 2;
}

//print sum of k numbers

let sums = 0;
let k = 10;
let m = 1;
while(m <= k){
    sums += m;
    m++;
}
console.log("The sum of first " + k + " numbers is " + sums);


//do-while loop
//print numbers from 0 to 4
let a = 0;
do{
    console.log("a = ", a);
    a++;
}while(a < 5);

//print odd numbers from 1 to 10
let b = 1;
do{
    console.log("b = ", b);
    b += 2;
}while(b < 10);

//print sum of p numbers
let p = 10;
let sum1 = 0;
let q = 1;
do{
    sum1 += q;
    q++;
}while(q <= p);
console.log("The sum of first " + p + " numbers is " + sum1);


//for-of loop
//print elements of an array
let arr = [1, 2, 3, 4, 5];
for(let element of arr){
    console.log("Element = ", element);
}


//print characters of a string
let str = "Hello";
for(let char of str){
    console.log("Character = ", char);
}

//print size of a string
let str1 = "Hello World";
let size = 0;

for(let char of str1){
    console.log("Character = ", char);
    size++;
    
}
console.log("Size of the string is: " + size);