// In setTimeout the program executes a block of code after the specified time intervale.If you want to stop this function call,you can use the clearTimeout() method.

//Example

let stop;//Declare the stop variable to store the timer ID

const currentTime = () => {
    //Return the current Date and Time
    let dateAndTime = new Date();

    let time = dateAndTime.toLocaleString();

    console.log(time);

    //Schedule the next execution and store the timer ID in 'stop'
    stop = setTimeout(currentTime, 3000);
}

//Start the initial call
currentTime()

//Stop the timer after 10 seconds

setTimeout(() => {
    clearTimeout(stop);
    console.log("Timer Stopped");
}, 10000)