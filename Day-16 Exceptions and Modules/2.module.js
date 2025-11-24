// As our program grows bigger, it may contain many lines of code. Instead of putting everything in a single file, you can use modules to separate codes in separate files as per their functionality. This makes our code organized and easier to maintain.

// Module is a file that contains code to perform a specific task. A module may contain variables, function, classes etc.

// you can export as many as modules using exports

// but you can export only one module  if you use default export

// example

// You can export multiple functions using named export

// This function returns square of a number

export function square(num) {
    return num * num;
}

// This function returns cube of a number

export function cube(num) {
    return num * num * num;
}

// This function returns double of a number

export function double(num) {
    return num * 2;
}

// Default export means you can export ONLY ONE main function/class/value

// Here we export one default function
export default function sayHello(name){
    return `Hello , ${name}`;
}

// ❌ This will throw an error because only ONE default export is allowed

// export default function sayBye(name) {
//   return `Bye, ${name}!`;
// }

