//Array

let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
console.log(fruits);
console.log(fruits[0]); // "Apple"
console.log(fruits[2]); // "Mango"


//printing all elements of an array using for loop
let numbers = [1, 2, 3, 4, 5];

for(let index = 0; index < numbers.length; index++){
    console.log("Index: " + index + ", Value: " + numbers[index]);
}

//printing all elements of an array using for-of loop
for(let value of numbers){
    console.log("Value: " + value);
}   

//printing all elements of an array using while loop
let i = 0;
while(i < numbers.length){
    console.log("Index: " + i + ", Value: " + numbers[i]);
    i++;
}


//practice question: Find the sum of all elements in an array
let arr = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < arr.length; i++){
    sum += arr[i];
}
console.log("Sum: " + sum);


//practice question: Find the average of all elements in an array
let arr2 = [1, 2, 3, 4, 5];
let sum2 = 0;
for (let i = 0; i < arr2.length; i++){
    sum2 += arr2[i];
}
let average = sum2 / arr2.length;
console.log("Average: " + average);