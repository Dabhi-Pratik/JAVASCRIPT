// var

// var  has  functional scope which means it accessible in function body outside its not accessible if we try to access it we will get an reference error

function sayName(){
    var person = "Pratik Dabhi";
    console.log(person);
}

sayName();