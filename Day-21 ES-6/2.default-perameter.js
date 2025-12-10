<<<<<<< HEAD
// we can pass default parameter in our function

// example

function game(gameName ="Kabbaddid"){
    console.log(`I am Playing ${gameName}`);
}

game();


// we can pass default parameter in our function

// example

function game2(gameName = "badminton"){
    console.log(`I am Playing ${gameName}`);
}

game2("Cricket")

// if we provided a argument and also provided default parameter then it will take argument instead of default parameter value

// another example-

function game3(gameName1, gameName2 ="Football"){
    console.log(`Right now i am  playing ${gameName1} then we will play ${gameName2}`)

}

game3("VolleyBall");

// it will take argument values as first parameter and second value as default parameter

// example with multiple default parameters

function greet(name="Guest", greeting="Hello"){
    console.log(`${greeting},${name}!`);
}

greet();
greet("Alice");
greet("Bob","Hi")

// example with default parameter as a function

function getDefaultGame(){
    return "Chess";
}

function game4(gameName = getDefaultGame()){
    console.log(`I am Playing ${gameName}`);
}

game4();
game4("Tennis");

// example with default parameter as an object

function displayPlayer(player = {name:"Unknown",age:0}){
    console.log(`Player:${player.name},Age:${player.age}`);
}

displayPlayer();
=======
// we can pass default parameter in our function

// example

function game(gameName ="Kabbaddid"){
    console.log(`I am Playing ${gameName}`);
}

game();


// we can pass default parameter in our function

// example

function game2(gameName = "badminton"){
    console.log(`I am Playing ${gameName}`);
}

game2("Cricket")

// if we provided a argument and also provided default parameter then it will take argument instead of default parameter value

// another example-

function game3(gameName1, gameName2 ="Football"){
    console.log(`Right now i am  playing ${gameName1} then we will play ${gameName2}`)

}

game3("VolleyBall");

// it will take argument values as first parameter and second value as default parameter

// example with multiple default parameters

function greet(name="Guest", greeting="Hello"){
    console.log(`${greeting},${name}!`);
}

greet();
greet("Alice");
greet("Bob","Hi")

// example with default parameter as a function

function getDefaultGame(){
    return "Chess";
}

function game4(gameName = getDefaultGame()){
    console.log(`I am Playing ${gameName}`);
}

game4();
game4("Tennis");

// example with default parameter as an object

function displayPlayer(player = {name:"Unknown",age:0}){
    console.log(`Player:${player.name},Age:${player.age}`);
}

displayPlayer();
>>>>>>> f3536c4cfe5da1381202e93f9a8329dfbe0672a7
displayPlayer({name:"Utsav",age:19})