<<<<<<< HEAD
// more strings methods

let text = 'Hello Pratik'

// match() method ==> searches a string for a value, or a regular expression, and returns the matches

console.log("(Match Method) Finding match in String: ", text.match("ra"))

// if not finding  matching string it will return null

console.log("Not finding Match in string : ", text.match("ab"))

// repeat() method ==> returns new string with a number of copies of strings

console.log("Repeat the string: ", text.repeat(2))

// replace()  method ==> searches a string for a pattern and return a new string where First match are replaced

console.log("Replacing Hello to Dabhi: ",text.replace("Hello","Dabhi"))

// replaceAll() method ==> searches a string for a pattern and returns a new string where all matches are replaced

console.log("Replacing l to L in all syntax: ",text.replaceAll("l","L"))

// search() method ==> searches a string for a value, or regular expression, and returns  the index(position) of the match

console.log("Searching l in text: ",text.search("l"))

//here we cant put starting index we can do that indexOf method

console.log("indexOf op with starting index =>",text.indexOf("P",2))

// slice() method ==> extracts a part of a string and returns a new string

// here first is staring index and after that end index is start counting from 0

console.log("Text Example: ",text)

console.log("Slice OP: ",text.slice(3))

console.log("Slice OP: ",text.slice(2,5))

console.log("Slice OP: ",text.slice(3,8))

console.log("Slice OP: ",text.slice(-1))  // it will start from last
=======
// more strings methods

let text = 'Hello Pratik'

// match() method ==> searches a string for a value, or a regular expression, and returns the matches

console.log("(Match Method) Finding match in String: ", text.match("ra"))

// if not finding  matching string it will return null

console.log("Not finding Match in string : ", text.match("ab"))

// repeat() method ==> returns new string with a number of copies of strings

console.log("Repeat the string: ", text.repeat(2))

// replace()  method ==> searches a string for a pattern and return a new string where First match are replaced

console.log("Replacing Hello to Dabhi: ",text.replace("Hello","Dabhi"))

// replaceAll() method ==> searches a string for a pattern and returns a new string where all matches are replaced

console.log("Replacing l to L in all syntax: ",text.replaceAll("l","L"))

// search() method ==> searches a string for a value, or regular expression, and returns  the index(position) of the match

console.log("Searching l in text: ",text.search("l"))

//here we cant put starting index we can do that indexOf method

console.log("indexOf op with starting index =>",text.indexOf("P",2))

// slice() method ==> extracts a part of a string and returns a new string

// here first is staring index and after that end index is start counting from 0

console.log("Text Example: ",text)

console.log("Slice OP: ",text.slice(3))

console.log("Slice OP: ",text.slice(2,5))

console.log("Slice OP: ",text.slice(3,8))

console.log("Slice OP: ",text.slice(-1))  // it will start from last
>>>>>>> f3536c4cfe5da1381202e93f9a8329dfbe0672a7
