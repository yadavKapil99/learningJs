// JavaScript is a dynamically typed language. In dynamically typed languages, variable types are determined at runtime, not at compile time. This means that you can assign values of different types to the same variable, and the variable's type can change during the execution of the program. 

let x = 5;  // x is a number
x = "Hello";  // x is now a string
x = [1, 2, 3];  // x is now an array









// ### primitive data-types = in this we have give the copy of the data-type. When we change the value of a data-type we change its value in its copy.

// types: String, Number, Boolean, Null, undefined, Symbol,Big Int

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id===anotherId);
// Ans : false ,because no two id's are equal even if they have same number

console.log(id);
console.log(anotherId);



// ### Refernce type or Non-Primitive

// types: Array , Objects ,Functions

// Array
const heroes = ['shakti-man','iron-man'];
// type = object

// object
let myObj = {
    name :'Kapil',
    age : 20
}
// type = object

// storing function  in a variable
const myFunction = function(){
    console.log("Hello: Kapil Yadav");
}
// type = function object