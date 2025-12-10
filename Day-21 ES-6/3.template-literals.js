// JavaScript Template Literals (Template Strings)
// JavaScript template literals are strings that allow us to embed variables or expressions directly within them. They are enclosed in backticks ``.

// example

const greeting = (name) => {
    console.log(`Hello ${name}`)
};

greeting("Pratik");

// example with expressions
const a = 5;
const b = 10;

console.log(`The sum of ${a} and ${b} is ${a + b}`)

// example with multi-line strings

const multiLineString = `This is a String
that spans across
multiple Line.`;

console.log(multiLineString);

// example with nested template literals

const nestedTemplate = (name, age) => {

    return `My name is ${name} and I am ${age} years old. ${age >= 18 ? `I am an Adult.` : `I am a Minor.`
        }`;
};

console.log(nestedTemplate("Pratik", 19))
console.log(nestedTemplate("Utsav", 15))

// tagged templates literals

// Tagged templates are an advanced form of template literals in JavaScript. They allow you to parse template literals with a function.

// Furthermore, you don't need to use parentheses () when passing the template literal to the function. For example,

const play = (game) => {
    console.log(`I am playing ${game}`)
}

play`GTA-5`;