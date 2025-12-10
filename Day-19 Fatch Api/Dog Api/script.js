<<<<<<< HEAD
// document.getElementById("btn").addEventListener("click",()=>{

//     const dog = fetch("https://dog.ceo/api/breeds/image/random");


// })


document.getElementById("btn").addEventListener("click", async () => {
    try {

        const image = document.getElementById("img")

        const res = await fetch("https://dog.ceo/api/breeds/image/random")

        const data = await res.json()

        if (data.status !== "success") {
            throw new Error("Failed to Fetch Dog Image");
        }

        image.src = data.message


    } catch (error) {
        console.log(error)
    }
=======
// document.getElementById("btn").addEventListener("click",()=>{

//     const dog = fetch("https://dog.ceo/api/breeds/image/random");


// })


document.getElementById("btn").addEventListener("click", async () => {
    try {

        const image = document.getElementById("img")

        const res = await fetch("https://dog.ceo/api/breeds/image/random")

        const data = await res.json()

        if (data.status !== "success") {
            throw new Error("Failed to Fetch Dog Image");
        }

        image.src = data.message


    } catch (error) {
        console.log(error)
    }
>>>>>>> f3536c4cfe5da1381202e93f9a8329dfbe0672a7
})