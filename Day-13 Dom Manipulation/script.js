//using id only

document.getElementById("para").textContent = "This is Paragraph changed using Script"

//using class 

document.getElementsByClassName("para2")[0].innerHTML = "<h1>This is Class Paragraph</h1>"


// querySelector

// return only single element which have first occurrence

document.querySelector("h3").textContent = "This is changed query selector Paragraph"


const newPara = document.querySelector(".style");

newPara.style.color = "red"
newPara.style.fontSize = "30px"


// querySelectorAll

// return nodeList not single element

const Paragraph = document.querySelectorAll("h2")

console.log(Paragraph)


for (p of Paragraph) {
    p.style.color = "blue"

    p.innerHTML = "<h1>This is Changed Paragraph using Query Selector All</h1>"
}

// events

// click event

document.querySelector("#btn").addEventListener("click", () => {
    document.getElementById("btn").textContent = "clicked";
    alert("Button Clicked")
})

//submit Event

document.querySelector("#form").addEventListener("submit", (e) => {
    e.preventDefault();

    const task = document.getElementById("task").value
    const description = document.getElementById("description").value

    console.log("Data:", { task, description });
})