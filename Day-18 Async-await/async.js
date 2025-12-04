// JavaScript normally runs code synchronously (one line at a time).
// And it is a single-threaded language (only one task at a time).
// But JavaScript can also handle asynchronous tasks.

// Asynchronous functions are those that take some time to complete
// (like fetching data, reading files, timers, API calls, etc.).

// Asynchronous programming allows JavaScript to perform long-running tasks
// without blocking the execution of other code.

// Modern asynchronous JavaScript uses:
// 1. Promises
// 2. async-await
// (Callbacks are old and harder to manage)

// async-await makes asynchronous code look like synchronous code,
// making it easier to write and understand.

// Example 1: Promise and async-await working together

// Creating a Promise
const greeting = new Promise((resolve, reject) => {
    resolve("Promise is resolved...");
});

// async function always returns a Promise
async function getData() {
    return greeting;   // returning a Promise
}
// Calling the async function
const result = getData();

// Using `.then()` to get the resolved value
result.then((res) => {
    console.log(res);
});

// Example 2: async function returning a normal value

// This async function returns a normal string.
// JavaScript automatically wraps it into a Promise.
async function greet() {
    return "Hello from Async...";
}
// Handling the returned Promise
greet().then((msg) => {
    console.log(msg);
});
