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
})