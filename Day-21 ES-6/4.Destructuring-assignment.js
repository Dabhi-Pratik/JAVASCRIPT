// JavaScript Destructuring
// The destructuring assignment introduced in ES6 makes it easy to assign array values and object properties to distinct variables. For example,

// example

// traditional method

const person = {
    name:"Pratik",
    surName:"Dabhi",
    age:19,
    email:"example@gmail.com"
}

// now if i want to access properties of person object

console.log("Person Name: ",person.name)
console.log("Person Surname: ",person.surName)
console.log("Person age: ",person.age)
console.log("Person Email: ",person.email)


// using the destructuring assignment

let {name,surName,age,email} = person;

console.log("Using Destructuring Assignment OP")

console.log("Person Name After: ",name)
console.log("Person Surname After: ",surName)
console.log("Person age After: ",age)
console.log("Person Email After: ",email)

// Array Destructuring
const number = [1, 2, 3, 4, 5];
const [first, second,third,fourth] = number;

console.log("Array Destructuring: ");
console.log(first); // 1
console.log(second); // 2
console.log(third); // 3
console.log(fourth); // 4

// Nested Object Destructuring
const user = {
    id:101,
    name:"John Doe",
    address:{
        city:"New York",
        zip:"10001"
    },
}

const {
    name:userName,
    address:{city,zip},
} = user;

console.log("Nested Object Destructuring: ")
console.log(userName); // John Doe
console.log(city); // New York
console.log(zip); // 10001

// Default Values
const {phone="N\A"} = user;
console.log("Default Values: ");
console.log(phone); // N\A


// Renaming Variables
const { name:fullName} = person;
console.log("Renaming Variable: ");
console.log(fullName); // Pratik



