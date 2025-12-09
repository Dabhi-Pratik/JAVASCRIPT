// To overcome callback hell, you can use Promises. Promises provide a cleaner and more manageable way to handle asynchronous operations by chaining .then() and handling errors with .catch(). This improves readability and maintains vertical code flow instead of horizontal nesting.

// the promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value

// promise as an object that links producing code and consuming code

// In JavaScript, a promise is a good way to handle asynchronous operations. It is used to find out if the asynchronous operation is successfully completed or not.

// A promise may have one of three states.

// Pending
// Fulfilled
// Rejected

// To create a promise object, we use the Promise() constructor.

// let promise = new Promise(function(resolve, reject){
// do something
// });

// The Promise() constructor takes a function as an argument. The function also accepts two functions resolve() and reject().

// If the promise returns successfully, the resolve() function is called. And, if an error occurs, the reject() function is called.

// example

// Creating a Promise (Promise Producing Code)

const examResult = new Promise((resolve, reject) => {
    console.log("Checking Exam Result");

    // Simulate delay (like fetching result from server)
    setTimeout(() => {
        let marks = 70;// change this value to test resolve/reject

        // If marks >= 40 → pass the exam
        if (marks >= 40) {
            resolve("Congratulations! You Pass the Exam.........🎉Where is Party..?")
        } else {
            reject("You Failed the Exam.Try Again! 📚")
        }

    }, 2000)
})

// Promise Consuming Code
examResult
    .then((message) => {
        // Runs only if resolve() is called
        console.log("Successes: ", message)
    })

    .then(() => {
        console.log("Now you can relax 😌")
    })

    .catch((error) => {
        // Runs only if reject() is called
        console.log("Error: ", error)
    })