// Methods with Parameters

// We can use Methods with parameter in Class Objects

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    job(jobName) {
        return jobName
    }
}

const person1 = new Person("Jatin", 19)

//Person Detail

console.log("Person Detail: ", "My name is " + person1.name + ". My age is " + person1.age + ". I am working as a " + person1.job("Software Engineer"))

// here job is  method in our Person class object

// and we are passing our parameters in method and accessing that

// another example

class BikeDetails{
    constructor(brand,name,year){
        this.brand = brand;
        this.name = name;
        this.year = year;
    }
    bikeYear(year){
        return this.year - year;
    }
}

const Bike1 = new BikeDetails("Kawasaki","Ninja",2025)

console.log("Bike Full Detail: ","My Bike brand is "+Bike1.brand+" and the Bike name is "+Bike1.name+" and my Bike is "+Bike1.bikeYear(2024)+" year Old.")