// ‘A JavaScript String is a sequence of characters, typically used to represent text.

// we can write our string using '', and "" quote

// example

let str = "Dabhi" // here Dabhi Pratik is a string data

//  strings methods example

console.log("String: ", str)

// charAt() method  ==> returns the character at specified index(position) counting from zero

console.log("Char At Method: ", str.charAt(4));

// concat() method ==> returns two or more joint strings

console.log("Concat Method: ", str.concat(" Pratik"))

// endsWith() method ==> returns true if the string ends with a specified value

console.log("Ends with Method:", str.endsWith("i"))

// endsWith() method ==> returns false if the string not ends with a specified value

console.log("Ends with Method:", str.endsWith("p"))

// includes() method ==> returns true if the string contains a specified value

console.log("Include D character in the str variable ?: ", str.includes("D"))

// includes() method ==> returns false if the string not contains a specified value

console.log("Include P character in the str variable ?: ", str.includes("P"))

// indexOf() method ==> returns the index(position) of the first occurrence of a value in string

str = "Dabhi Pratik"

console.log("Index of Method: ", str.indexOf("a"))

console.log("Index of ( not available show): ", str.indexOf("w"))

// lastIndexOf() method ==> returns the last occurrence of a value in string

console.log("Last index Method: ", str.lastIndexOf("a"))

// length returns the length of the string

console.log("Length Method: ", str.length)