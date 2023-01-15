// javascript is most popular programming language for web development.
// js is easy to learn.


console.log("Hello Pradip");

var x;
// console.log(x);
x = 12;
console.log(x);

var x = 1;
var y = 2;
x = 12;
const z = x + y;
var v = x + y;
y = 3;

console.log(z);
console.log(v);
const k = x + y;
console.log(k);

// js operator:
// Operator	Description
// +	Addition
// -	Subtraction
// *	Multiplication
// **	Exponentiation (ES2016)
// /	Division
// %	Modulus (Remainder)
// ++	Increment
// --	Decrement



// JavaScript has 8 Datatypes
// 1. String
// 2. Number
// 3. Bigint
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol
// 8. Object

// The Object Datatype
// The object data type can contain:

// 1. An object
// 2. An array
// 3. A date


let name = "String";
console.log(name);

var x = 12;
console.log(x);

let m = BigInt("1324654512347874254214544414854568");
console.log(m);

var c = 11;
var d = 11;
console.log(c==d);

var a;
console.log(a);

// in null datatype can not contain values like undefined 

// https://www.programiz.com/javascript/symbol

// Object

const person = {
    name: "pradip",
    age: 21,
    eyecolor: "blue",
    Qualification: "Graduated"
}
console.log(person);
console.log(person.name, person.Qualification);

// function

// String methods:

// String length
// String slice()
// String substring()
// String substr()
// String replace()
// String replaceAll()
// String toUpperCase()
// String toLowerCase()
// String concat()
// String trim()
// String trimStart()
// String trimEnd()
// String padStart()
// String padEnd()
// String charAt()
// String charCodeAt()
// String split()

let text = "Apple, Banana, Pinapple, kiwi";
console.log(text.length);

// slice() extracts a part of a string and returns the extracted part in a new string.
console.log(text.slice(7));
console.log(text.slice(7, 13)); // start, end
let part = text.slice(-14);
console.log(part);

// substring() is similar to slice().

let str = "Apple, Banana, Kiwi";
let part1 = str.substring(7, 13);

console.log(part1);

// substr() is similar to slice().

let part2 = str.substr(7, 6); // starting 7 then after 6 of starting.

console.log(part2);

// The replace() method replaces a specified value with another value in a string:

let text2 = "hello pradip welcome in javascript";
let part3 = text2.replace("welcome in", "what is");
console.log(part3);

// In 2021, JavaScript introduced the string method replaceAll():

let text4 = "my name is pradip";
text4 = text4.replaceAll("I am Pradip");
console.log(text4);

// UpperCase/ LowerCase methods:
// let text1 = "Hello World!";
// let text5 = text1.toUpperCase();

// let text1 = "Hello World!";      
// let text2 = text1.toLowerCase()


// concat() joins two or more strings:

let text6 = "Hello";
let text7 = "World";
let text8 = text6.concat(" ", text7);
console.log(text8);


// The trim() method removes whitespace from both sides of a string:
let text9 = "           hello pradip       ";
let text10 = text9.trim();
console.log(text9);
console.log(text10);



































