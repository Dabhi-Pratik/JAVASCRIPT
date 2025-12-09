// The while loop repeatedly executes a block of code as long as a specified condition is true.

// while loop example

let fruits = ["Apple", "Banana", "Mango", "Orange"];

let i = 0;

while (i < fruits.length) {
    console.log("Fruit: ", fruits[i]);
    i++;
}

// another example

let sum = 0;

let j = 1;
while (j <= 20) {
    sum += j;  // sum = sum + j
    j++;
    console.log(sum);
}

