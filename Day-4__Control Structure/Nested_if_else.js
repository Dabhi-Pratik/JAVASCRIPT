<<<<<<< HEAD
// Nested if...else statements contain one or more if...else statements within another if...else block.

// When we use an if...else statement inside another if...else statement, we create a nested if...else structure.

// example

let balance = 10000
let withdraw = 2000

if (balance >= withdraw) {

  console.log("Withdraw Possible")

  if (withdraw > 1000) {
    console.log("Large withdrawal! Please confirm.")
  } else {
    console.log("Withdrawal Successful.........!")
  }
}

else {
  console.log("Insufficient Balance")
=======
// Nested if...else statements contain one or more if...else statements within another if...else block.

// When we use an if...else statement inside another if...else statement, we create a nested if...else structure.

// example

let balance = 10000
let withdraw = 2000

if (balance >= withdraw) {

  console.log("Withdraw Possible")

  if (withdraw > 1000) {
    console.log("Large withdrawal! Please confirm.")
  } else {
    console.log("Withdrawal Successful.........!")
  }
}

else {
  console.log("Insufficient Balance")
>>>>>>> f3536c4cfe5da1381202e93f9a8329dfbe0672a7
}