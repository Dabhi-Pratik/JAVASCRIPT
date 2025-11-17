//Normal Object Example

const Person = {
    name:"John",
    surname:"doe"
}

console.log("Person details before: ",Person)

// Adding new age properties to the person object

Person.age = 30;

console.log("Person Details After: ",Person)

// Now with class Example

class Car {
    constructor(brand,name){
        this.brand = brand;
        this.name = name;  
    }
}

const carOne = new Car("Porsche","991")

console.log("Car Details Before: ",carOne)

// Now i want to add properties in carOne Object

carOne.color = "Racing Yellow"

console.log("Car details After: ",carOne)