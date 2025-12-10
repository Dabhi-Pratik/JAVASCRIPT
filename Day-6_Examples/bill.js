<<<<<<< HEAD
let unit = 201; // total units used
let bill;

// calculate electricity bill
if (unit <= 100) {
  bill = unit * 10;
} else if (unit <= 200) {
  bill = 100 * 10 + (unit - 100) * 20;
} else {
  bill = 100 * 10 + 100 * 20 + (unit - 200) * 30;
}

=======
let unit = 201; // total units used
let bill;

// calculate electricity bill
if (unit <= 100) {
  bill = unit * 10;
} else if (unit <= 200) {
  bill = 100 * 10 + (unit - 100) * 20;
} else {
  bill = 100 * 10 + 100 * 20 + (unit - 200) * 30;
}

>>>>>>> f3536c4cfe5da1381202e93f9a8329dfbe0672a7
console.log("Total Bill is", bill); // display total bill