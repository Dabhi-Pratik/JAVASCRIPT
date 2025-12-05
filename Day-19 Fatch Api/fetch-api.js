
//Using Promise 


// const userData = () => {
//     const res = fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((user) => console.log(user.map((user) => user.address
// )))

//     console.log(res);
// }

// userData();

//Using async await

async function fetchData() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users")



        if (!res.ok) {
            throw new Error("Failed to Fetch Data........!")
        }
        const data = await res.json();

        console.log(data)
    }

    catch (error) {
        console.log(error);
    }
}

fetchData();



