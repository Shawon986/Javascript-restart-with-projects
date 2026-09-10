//String methods
let str = "Hello, World!";
console.log(str.length); // 13
console.log(str.charAt(0)); // "H"
console.log(str.indexOf("World")); // 7
console.log(str.slice(0, 5)); // "Hello"
console.log(str.toUpperCase()); // "HELLO, WORLD!"
console.log(str.toLowerCase()); // "hello, world!"


//template literals
let name = "Shawon";
let age = 25;
console.log(`My name is ${name} and I am ${age} years old.`);

let object = {
    name: "Shawon",
    age: 25
};
console.log(`My name is ${object.name} and I am ${object.age} years old.`);