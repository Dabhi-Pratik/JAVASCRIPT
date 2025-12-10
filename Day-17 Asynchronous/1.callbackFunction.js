<<<<<<< HEAD
// Where callbacks really shine are in asynchronous functions, where one function has to wait for another function (like waiting for a file to load).

// if you want to wait for the result of the previous function call before the next statement is executed, you can use a callback function.

// callback is function passed as an argument to another function
// using callback we can do asynchronous task in js
// a callback function it runs after another function has finished
// when you pass functions as an arguments don't use parenthesis

// callback example

function callbackFunc(result) {
  console.log("The total Sum of Number is: ", result)
}

function totalSumOfNumber(a, b, callbackFunc) {
  let result = a + b;
  callbackFunc(result);
}

totalSumOfNumber(14, 10, callbackFunc);

//**************************************************

function totalSum(a, b, arrFunc) {
  const result = a + b;
  arrFunc(result);
}

totalSum(10, 20, (a) => {
  console.log(a);
});

//

function result(value) {
  console.log(value);
}

function total(a, b, callbackFunc) {
  const res = a + b;

  callbackFunc(res);
}

total(10, 20, result);

=======
// Where callbacks really shine are in asynchronous functions, where one function has to wait for another function (like waiting for a file to load).

// if you want to wait for the result of the previous function call before the next statement is executed, you can use a callback function.

// callback is function passed as an argument to another function
// using callback we can do asynchronous task in js
// a callback function it runs after another function has finished
// when you pass functions as an arguments don't use parenthesis

// callback example

function callbackFunc(result) {
  console.log("The total Sum of Number is: ", result)
}

function totalSumOfNumber(a, b, callbackFunc) {
  let result = a + b;
  callbackFunc(result);
}

totalSumOfNumber(14, 10, callbackFunc);

//**************************************************

function totalSum(a, b, arrFunc) {
  const result = a + b;
  arrFunc(result);
}

totalSum(10, 20, (a) => {
  console.log(a);
});

//

function result(value) {
  console.log(value);
}

function total(a, b, callbackFunc) {
  const res = a + b;

  callbackFunc(res);
}

total(10, 20, result);

>>>>>>> f3536c4cfe5da1381202e93f9a8329dfbe0672a7
