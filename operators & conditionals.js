//Arithmetic Operators

const a = 10;
const b = 5;
const c = a + b; // Addition
const d = a - b; // Subtraction
const e = a * b; // Multiplication
const f = a / b; // Division
const g = a % b; // Modulus

console.log(c, d, e, f, g);

//Comparison Operators

const x = 10;
const y = 5;
const z = x > y; // Greater than
const w = x < y; // Less than
const v = x >= y; // Greater than or equal to
const u = x <= y; // Less than or equal to
const t = x === y; // Strict equality
const s = x !== y; // Strict inequality

console.log(z, w, v, u, t, s);

//unary Operators

let num = 10;
num++; // Increment
console.log(num); // 11
num--; // Decrement
console.log(num); // 10

//postfix and prefix increment/decrement

let number = 5;
console.log(number++); // 5 (postfix increment)
console.log(number); // 6    

let number2 = 5;
console.log(++number2); // 6 (prefix increment)
console.log(number2); // 6

let number3 = 5;
console.log(number3--); // 5 (postfix decrement)
console.log(number3); // 4  

let number4 = 5;
console.log(--number4); // 4 (prefix decrement)
console.log(number4); // 4

//Logical Operators

const p = true;
const q = false;
const r = p && q; // Logical AND
const i = p || q; // Logical OR
const j = !p; // Logical NOT

console.log(r, i, j);

//Ternary Operator

const age = 18;
const canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote);

//Typeof Operator

const name = "Shawon";
const ages = 26;
console.log(typeof name);
console.log(typeof ages);


//Assignment Operators

let num1 = 10;
num1 += 5;
console.log(num1); // 15

num1 -= 3;
console.log(num1); // 12

num1 *= 2;
console.log(num1); // 24

num1 /= 3;
console.log(num1); // 8

num1 %= 5;
console.log(num1); // 3

num1 **= 2;
console.log(num1); // 9


//if,else,else if Statement

const age1 = 20;
if (age1 >18){
    console.log("You are an adult.");
}
else{
    console.log("You are a minor.");
}

const mode = "light";
if (mode === "dark"){
    console.log("Dark mode is enabled.");
}
else if (mode === "light"){
    console.log("Light mode is enabled.");
}
else{
    console.log("Invalid mode.");
}

