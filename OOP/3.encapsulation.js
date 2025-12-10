<<<<<<< HEAD
// **Encapsulation** => Encapsulation means keeping properties and methods private inside a class, so that they are not accessible from outside that class.

// Example:

class Student{
    //Private fields(Encapsulation)

    #name;
    #standard;
    #school;

    constructor(name,standard,school){
        this.#name = name;
        this.#standard = standard;
        this.#school = school;
    }

    //Getter for Name
    getName(){
        return this.#name;
    }

    //setter for Name
    setName(newName){
        this.#name = newName;
    }

    // Method to display student details
    getDetails(){
        return `Name:${this.#name},Standard:${this.#standard},School:${this.#school}`;
    }
}

// Creating an object of the Student class

const studentDetail = new Student("Johan",10,"XYZ School")

// Accessing name via getter
console.log(studentDetail.getName()); // Output: John

// Trying to access private field directly (will throw undefined)
console.log(studentDetail.name) // Output: undefined


// Modifying the name using setter
studentDetail.setName("Pratik")

// Accessing updated name
console.log(studentDetail.getName()); // Output: Pratik

// Display full details
console.log(studentDetail.getDetails());
=======
// **Encapsulation** => Encapsulation means keeping properties and methods private inside a class, so that they are not accessible from outside that class.

// Example:

class Student{
    //Private fields(Encapsulation)

    #name;
    #standard;
    #school;

    constructor(name,standard,school){
        this.#name = name;
        this.#standard = standard;
        this.#school = school;
    }

    //Getter for Name
    getName(){
        return this.#name;
    }

    //setter for Name
    setName(newName){
        this.#name = newName;
    }

    // Method to display student details
    getDetails(){
        return `Name:${this.#name},Standard:${this.#standard},School:${this.#school}`;
    }
}

// Creating an object of the Student class

const studentDetail = new Student("Johan",10,"XYZ School")

// Accessing name via getter
console.log(studentDetail.getName()); // Output: John

// Trying to access private field directly (will throw undefined)
console.log(studentDetail.name) // Output: undefined


// Modifying the name using setter
studentDetail.setName("Pratik")

// Accessing updated name
console.log(studentDetail.getName()); // Output: Pratik

// Display full details
console.log(studentDetail.getDetails());
>>>>>>> f3536c4cfe5da1381202e93f9a8329dfbe0672a7
// Output: Name: Pratik, Standard: 10, School: XYZ School