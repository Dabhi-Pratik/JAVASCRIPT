<<<<<<< HEAD
// In javaScript,there are two kinds of Object properties:

// Data Properties
// Accessor properties


const student = {
    // data property
    firstName: "Pratik"
}

// In javaScript,accessor properties are methods that get or set the value of an object.For that,We use these keywords:

// get - to define a getter method to get the property value
// set - to define a setter method to set the property value

// get method Example

const studentDetail = {
    name: "Pratik",
    age: 19,

    get studentAge() {
        return this.age;
    },
}

console.log("student age is: ", studentDetail.studentAge)

// another Example


const carDetail = {
    company: "Porsche",
    color: "Blue",

    get carCompany() {
        return this.company
    },
}

console.log("Car Company is ", carDetail.carCompany)

=======
// In javaScript,there are two kinds of Object properties:

// Data Properties
// Accessor properties


const student = {
    // data property
    firstName: "Pratik"
}

// In javaScript,accessor properties are methods that get or set the value of an object.For that,We use these keywords:

// get - to define a getter method to get the property value
// set - to define a setter method to set the property value

// get method Example

const studentDetail = {
    name: "Pratik",
    age: 19,

    get studentAge() {
        return this.age;
    },
}

console.log("student age is: ", studentDetail.studentAge)

// another Example


const carDetail = {
    company: "Porsche",
    color: "Blue",

    get carCompany() {
        return this.company
    },
}

console.log("Car Company is ", carDetail.carCompany)

>>>>>>> f3536c4cfe5da1381202e93f9a8329dfbe0672a7
console.log("Color is ", carDetail.color)