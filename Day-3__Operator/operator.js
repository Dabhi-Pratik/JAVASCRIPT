/*
JavaScript operators are special symbols that perform operations on one or more operands (values). For example:

2 + 4;  // 6

Here, we used the `+` operator to add the operands 2 and 4.
*/

// There are a total of seven types of operators in JavaScript:

// 1. Arithmetic Operators
// 2. Assignment Operators
// 3. Comparison Operators
// 4. Logical Operators
// 5. Bitwise Operators
// 6. Unary Operators
// 7. Miscellaneous Operators

// ---------------------------------------------

// 1. Arithmetic Operators
// Used to perform mathematical operations.

let a = 20
let b = 10

console.log("Addition: ",a+b);
console.log("Subtraction: ",a-b);
console.log("Multilication: ",a*b);
console.log("Division:", a/b); 
console.log("Modulus:", a % b); 
console.log("Exponentiation:", a ** b);

// ---------------------------------------------

// 2. Assignment Operators
// Used to assign values to variables.

let x = 3

x += 4 // x = x+4

console.log("x after x+=4 : ",x);


// ---------------------------------------------

// 3. Comparison Operators
// Used to compare two values and return a boolean result.


console.log("Equal:",5 == "5") // true (loose equality, type coercion)
console.log("Strict Equal:",5 == "5") // false (strict equality, no type coercion)
console.log("Not Equal: ", 5 != 4) // true
console.log("Greater then: ", 5 > 10)//false
console.log("Less then: ", 5 < 10)// true

// ---------------------------------------------

// 4. Logical Operators
// Used to combine multiple boolean expressions.

let isTrue = true
let isFalse = false


console.log("AND: ", isTrue && isFalse) //false
console.log("OR: ", isTrue || isFalse) // true
console.log("NOT: ", !isTrue) // false

// ---------------------------------------------

// 5. Bitwise Operators
// Operate on binary representations of numbers.

let  d = 5 // 0101 in binary
let e = 3 // 0011 in binary

console.log("Bitwise AND: ",d & e)
console.log("Bitwise OR: ",d | e)
console.log("Bitwise XOR: ",d ^ e)

// ---------------------------------------------

// 6. Unary Operators
// Operators with a single operand.

let num = 5

console.log("Unary Nagation: ", -num)// -5
console.log("Incremente: ",++num)// 6(Pre-increment)
console.log("Decremente: ",--num)// 4(Pre-Decrement)

// ---------------------------------------------

// 7. Miscellaneous Operators


// Ternary Operator

let age =20

let canVote = age => 18 ? " Yes ": " No "
console.log("Can Vote??",canVote)//yes

//Typeof Operator




console.log("Type of Dabhi: ",typeof "dabhi") // String
console.log("Type of 22: ",typeof 22) // Number