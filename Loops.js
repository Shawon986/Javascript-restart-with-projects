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
