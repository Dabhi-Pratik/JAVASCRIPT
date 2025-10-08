// swapping two variables using a temporary variable
let temp;
let num1 = 10;
let num2 = 20;

console.log("Before swapping:", num1, num2);

temp = num1; // store num1 in temp
num1 = num2; // assign num2 to num1
num2 = temp; // assign temp (old num1) to num2

console.log("After swapping:", num1, num2);

// swapping two variables without using a third variable
let a = 30;
let b = 40;

console.log("Before swapping:", a, b);

a = a + b; // sum of a and b stored in a
b = a - b; // subtract b from new a to get original a value in b
a = a - b; // subtract new b from a to get original b value in a

console.log("After swapping:", a, b);