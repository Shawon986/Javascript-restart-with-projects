//Variables

var fullName = "Shawon Hossain";

console.log(fullName);
var age = 26;

console.log(age);

var address = "Dhaka, Bangladesh";

console.log(address);

var x = null;
console.log(x);
var y = undefined;
console.log(y);

//Data Types

var name = "Shawon Hossain"; //String
var age = 26; //Number
var isStudent = true; //Boolean
var hobbies = ["Reading", "Writing", "Coding"]; //Array
var address = { //Object
    street: "123 Main St",
    city: "Dhaka",
    country: "Bangladesh",
    postcode: "12345"
};
console.log(address);
console.log(hobbies);
console.log(name);
console.log(age);
console.log(isStudent);


//Primitives and Non-Primitives

//Primitive data types
var name = "Shawon"; //String
var age = 26; //Number
var isStudent = true; //Boolean
var x = null; //Null
var y = undefined; //Undefined
var z = Symbol("id"); //Symbol
var w = 10n; //BigInt

//Non-Primitive data types
var hobbies = ["Reading", "Writing", "Coding"]; //Array
var address = { //Object
    street: "123 Main St",
    city: "Dhaka",
    country: "Bangladesh",
    postcode: "12345"
};
var greet = function() { //Function
    console.log("Hello!");
}
greet();

//var,let,const
var x = 5; //var can be redeclared and updated
let y = 10; //let can be updated but not redeclared
const z = 15; //const cannot be updated or redeclared

//let a = 5;
//console.log(a);
//let a = 10; // This will throw an error because 'a' has already been declared with let

//const b = 20;
//console.log(b);
//const b = 25; // This will throw an error because 'b' is a constant and cannot be reassigned

var c = 30;
console.log(c);
var c = 35; // This will not throw an error because 'c' is declared with var and can be redeclared

