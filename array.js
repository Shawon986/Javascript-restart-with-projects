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