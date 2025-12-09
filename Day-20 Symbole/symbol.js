// JavaScript Symbol
// The JavaScript ES6 introduced a new primitive data type called Symbol. Symbols are immutable (cannot be changed) and are unique. For example,

const msg1 = Symbol("Hello");

const msg2 = Symbol("Hello");


console.log(msg1 === msg2)

// as you can see both values are similar but due to symbol it's not same due to that op will return false

// creating symbols

const num = Symbol(1515);

console.log("Type of Num is ", typeof num)

console.log("Num is : ", num)

// accessing symbols

console.log("Num value are : ", num.description);

// Add Symbol as an Object Key
// You can add symbols as a key in an object using square brackets []. For example,

let id = Symbol("id");

let Person = {
    name: "Jack",

    // adding symbol as a key
    [id] : 123, // not "id": 123

}

console.log(Person) // {name: "Jack", Symbol(id): 123}

// Symbols are not included in for...in Loop
// The for...in loop does not iterate over Symbolic properties. For example,

let id2 = Symbol("id");

let Person2 = {
    name:"Jack",
    age:25,
    [id2]:12,
}

//Using for....in

for(let key in Person2){
    console.log(key)
}

