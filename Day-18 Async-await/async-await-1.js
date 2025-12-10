<<<<<<< HEAD
// STEP 1: Create a Promise
const greeting = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello! Promise Completed")
    }, 2000)
});


// STEP 2: Make async function
async function showMassage() {
    console.log("Waiting For Massage.....!");

    // STEP 3: Use await
    const msg = await greeting;

    // STEP 4: Print the result
    console.log(msg);
    console.log("Done!");

}

// STEP 5: Call function

showMassage();


=======
// STEP 1: Create a Promise
const greeting = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello! Promise Completed")
    }, 2000)
});


// STEP 2: Make async function
async function showMassage() {
    console.log("Waiting For Massage.....!");

    // STEP 3: Use await
    const msg = await greeting;

    // STEP 4: Print the result
    console.log(msg);
    console.log("Done!");

}

// STEP 5: Call function

showMassage();


>>>>>>> f3536c4cfe5da1381202e93f9a8329dfbe0672a7
