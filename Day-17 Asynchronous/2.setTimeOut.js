// The setTimeOut() method executes a block of code after the specified time.The method executes the code only once.

//The commonly used syntax of JavaScript setTimeout is:

//setTimeout(function,millisecond);
//Its parameters are;

//Function - a function containing a block of code
//millisecond - the time after which the function is executed 
// The setTimeout() method returns an intervalID,which is a positive integer.

const greeting = () =>{
    console.log("Greeting function Op will print hello after 5 seconds");
    setTimeout(()=>{
        console.log("Hello")
    },5000)
}

greeting();

// Another Example

const currentYear = () =>{
    console.log("Checking Current Year");

    setTimeout(() =>{
        let currentYear = new Date().getFullYear();
        console.log("Current Year: ",currentYear)
    },5000)
}

currentYear();