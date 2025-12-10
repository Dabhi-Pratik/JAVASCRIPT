<<<<<<< HEAD
let text = 'Hello Pratik'

//  split() methods ==> Splits a string into an array of substrings

console.log("Split String into Array with Space Added: ",text.split(" "))

console.log("Split String into Array without Space Added: ",text.split(" "))

console.log("Split String with o",text.split("o")) // will remove specified value in text and return string

// startsWith() methods ==> startswith method whether a string begins with specified characters

console.log("startswith method: ",text.startsWith("Hello"))

console.log("startswith method: ",text.startsWith("Pr"))

// The substring() method extracts characters, between two indices (positions), from a string, and returns the substring.

// The substring() method extracts characters from start to end (exclusive).

// The substring() method does not change the original string.

// If start is greater than end, arguments are swapped: (4, 1) = (1, 4).

// Start or end values less than 0, are treated as 0

console.log("Text: ",text)

console.log("Substring Example: ",text.substring(6))

console.log("Substring Op1: ",text.substring(2,8))

console.log("Substring Op2: ",text.substring(-1)) // return full text

// tolowerCase() ==> toLowerCase()	Returns a string converted to lowercase letters

console.log("Lower case op => ",text.toLowerCase());

// toupperCase() ==> Returns a string converted to uppercase letters

console.log("Upper Case OP => ",text.toUpperCase());

// trim()	Returns a string with removed whitespace

let trimTextexample ="        Hello             ";

console.log("Length OP text for trim => ",trimTextexample.length)

console.log("white-Space removed and then after length of string => ",trimTextexample.trim().length)

// we can trim from start and end using trim.start() and trim.end() methods

// example

console.log("removing white-Space from starting part only and then after length of string => ",trimTextexample.trimStart().length)

// trim.end() example

console.log("removing white-Space from starting part only and then after length of string => ",trimTextexample.trimEnd().length)


=======
let text = 'Hello Pratik'

//  split() methods ==> Splits a string into an array of substrings

console.log("Split String into Array with Space Added: ",text.split(" "))

console.log("Split String into Array without Space Added: ",text.split(" "))

console.log("Split String with o",text.split("o")) // will remove specified value in text and return string

// startsWith() methods ==> startswith method whether a string begins with specified characters

console.log("startswith method: ",text.startsWith("Hello"))

console.log("startswith method: ",text.startsWith("Pr"))

// The substring() method extracts characters, between two indices (positions), from a string, and returns the substring.

// The substring() method extracts characters from start to end (exclusive).

// The substring() method does not change the original string.

// If start is greater than end, arguments are swapped: (4, 1) = (1, 4).

// Start or end values less than 0, are treated as 0

console.log("Text: ",text)

console.log("Substring Example: ",text.substring(6))

console.log("Substring Op1: ",text.substring(2,8))

console.log("Substring Op2: ",text.substring(-1)) // return full text

// tolowerCase() ==> toLowerCase()	Returns a string converted to lowercase letters

console.log("Lower case op => ",text.toLowerCase());

// toupperCase() ==> Returns a string converted to uppercase letters

console.log("Upper Case OP => ",text.toUpperCase());

// trim()	Returns a string with removed whitespace

let trimTextexample ="        Hello             ";

console.log("Length OP text for trim => ",trimTextexample.length)

console.log("white-Space removed and then after length of string => ",trimTextexample.trim().length)

// we can trim from start and end using trim.start() and trim.end() methods

// example

console.log("removing white-Space from starting part only and then after length of string => ",trimTextexample.trimStart().length)

// trim.end() example

console.log("removing white-Space from starting part only and then after length of string => ",trimTextexample.trimEnd().length)


>>>>>>> f3536c4cfe5da1381202e93f9a8329dfbe0672a7
