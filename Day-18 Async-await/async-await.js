<<<<<<< HEAD
// The await keyword is used inside the async function to wait for the asynchronous operation.
// The use of await pauses the async function until the promise returns a result (resolve or reject) value. For example,

// async const fetchData = () =>{} ;  // as you can see you can't use arrow functions direct as async function

// if you want to use that you can use using function expression

// example

// Creating a Promise which resolves after 5 seconds
const greeting = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello Good Morning...1");// Resolving the promise
    }, 5000)
})

// Creating another Promise which resolves after 10 seconds
const greeting2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello Good Morning......2") // Resolving the second promise
    }, 10000)
})

// Async function to handle Promises using async-await
async function getMsg() {

    // Waiting for the first promise to complete
    const msg = await greeting;
    console.log("Massage-1", msg);

    // Waiting for the second promise to complete
    const msg2 = await greeting2;
    console.log("Massage-2", msg2);

    // This will run only after both awaits have finished
    console.log("This will wait until my async Program complete");
}

=======
// The await keyword is used inside the async function to wait for the asynchronous operation.
// The use of await pauses the async function until the promise returns a result (resolve or reject) value. For example,

// async const fetchData = () =>{} ;  // as you can see you can't use arrow functions direct as async function

// if you want to use that you can use using function expression

// example

// Creating a Promise which resolves after 5 seconds
const greeting = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello Good Morning...1");// Resolving the promise
    }, 5000)
})

// Creating another Promise which resolves after 10 seconds
const greeting2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello Good Morning......2") // Resolving the second promise
    }, 10000)
})

// Async function to handle Promises using async-await
async function getMsg() {

    // Waiting for the first promise to complete
    const msg = await greeting;
    console.log("Massage-1", msg);

    // Waiting for the second promise to complete
    const msg2 = await greeting2;
    console.log("Massage-2", msg2);

    // This will run only after both awaits have finished
    console.log("This will wait until my async Program complete");
}

>>>>>>> f3536c4cfe5da1381202e93f9a8329dfbe0672a7
getMsg();