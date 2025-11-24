// A default export allows you to export a single function, class, or object from a file. Unlike named exports, you can only have one default export per file.

// When importing a default export, you do not need to use curly braces {}. You can also give it any name you want during import.

import { square, cube, double } from "./2.module.js";

console.log("Square: ", square(4));
console.log("Cube: ", cube(3));
console.log("Double: ", double(10));

// For default export, NO curly braces are needed

import sayHello from "./2.module.js"

console.log(sayHello("Pratik")) // Hello, Pratik!