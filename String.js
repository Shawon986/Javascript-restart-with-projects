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

//escape sequences
let str1 = "Hello, \"World\"!"; // Hello, "World"!
console.log(str1); 
let str2 = 'Hello, \'World\'!'; // Hello, 'World'!
console.log(str2);
let str3 = "Hello, \\World\\!"; // Hello, \World\!
console.log(str3);
let str4 = "Hello, \nWorld!"; // Hello, World!
console.log(str4);
let str5 = "Hello, \tWorld!"; // Hello, 	World!
console.log(str5); 


//string methods
let str6 = "Hello, World!";
console.log(str6.length); // 13
console.log(str6.charAt(0)); // "H"
console.log(str6.indexOf("World")); // 7
console.log(str6.slice(0, 5)); // "Hello"
console.log(str6.toUpperCase()); // "HELLO, WORLD!"
console.log(str6.toLowerCase()); // "hello, world!"
str6 = str6.replace("World", "JavaScript");
console.log(str6); // "Hello, JavaScript!"
str6 = str6.concat(" How are you?");
console.log(str6); // "Hello, JavaScript! How are you?"
str6 = str6.trim();
console.log(str6); // "Hello, JavaScript! How are you?"
str6 = str6.split(" ");
console.log(str6); // ["Hello,", "JavaScript!", "How", "are", "you?"]
str6 = str6.join(" ");
console.log(str6); // "Hello, JavaScript! How are you?"
str6 = str6.startsWith("Hello");
console.log(str6); // true

