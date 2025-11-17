// We can use Methods in class Object

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    job() {
        let job = "Software Engineers";

        return job;
    }
}

const person1 = new Person("Umang", 20)

// Person Details

console.log("Person Detail: ", "My Name is " + person1.name + ".My age is " + person1.age + ". I am working as a " + person1.job());

//Here job is Method in our Person class Object





