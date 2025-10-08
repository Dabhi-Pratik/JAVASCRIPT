// for/in loop: There is another advanced loop called for/in loop which runs through all the properties of an object. The loop will be executed once for each property of the object. The for/in loop can also be used over the properties of arrays. However, it is not advised to use for/in loop over arrays.  for/of and Array.forEach() loops are suggested to be used while working with arrays.

// example iterating through object using for in loop

let laptop = {
    brand: "HP",
    processor: "i5",
    ram: "16GB",
    storage: "512GB SSD",
};

let laptopInfo = ""

for (laptopInfo in laptop) {
    console.log(laptop[laptopInfo])
}


// another example

let car = {
    brand: "Tata",
    model: "Nexon",
    year: 2024,
    color: "Black"
};

let carInfo = "";

for (let key in car) {
    carInfo += `${key}: ${car[key]} `;

}

console.log(carInfo);


