<<<<<<< HEAD
// Promise Producing Code

const orderFood = new Promise((resolve, reject) => {
    console.log("📦 Order placed...")

    setTimeout(() => {
        console.log("👨‍🍳 Restaurant is preparing your food...")

        let foodReady = true;// change to false to test error

        if (foodReady) {
            resolve("🍔 Your food is ready!")
        } else {
            reject("❌ Restaurant cancelled your order")
        }
    }, 2000)
})
// Promise Consuming Code with Chaining and finally()
orderFood
    .then((msg) => {
        // Step 1: Food is ready
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("Success: ", msg)
                resolve();
            }, 1500)
        })
    })

    .then(() => {
        // Step 2: Delivery boy picked up food
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("🚴 Delivery partner picked up your order.")
                resolve()
            }, 1500)
        })
    })

    .then(() => {
        // Step 3: Order delivered
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("🏠 Your order has been delivered!")
                resolve()
            }, 1500)
        })
    })

    .catch((err) => {
        // If any step fails
        console.log("Error: ", err)
    })
    .finally(() => {
        // Always runs — success or failure
        setTimeout(() => {
            console.log("🍽️ Thanks for using FoodExpress!")
        }, 1500)
=======
// Promise Producing Code

const orderFood = new Promise((resolve, reject) => {
    console.log("📦 Order placed...")

    setTimeout(() => {
        console.log("👨‍🍳 Restaurant is preparing your food...")

        let foodReady = true;// change to false to test error

        if (foodReady) {
            resolve("🍔 Your food is ready!")
        } else {
            reject("❌ Restaurant cancelled your order")
        }
    }, 2000)
})
// Promise Consuming Code with Chaining and finally()
orderFood
    .then((msg) => {
        // Step 1: Food is ready
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("Success: ", msg)
                resolve();
            }, 1500)
        })
    })

    .then(() => {
        // Step 2: Delivery boy picked up food
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("🚴 Delivery partner picked up your order.")
                resolve()
            }, 1500)
        })
    })

    .then(() => {
        // Step 3: Order delivered
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("🏠 Your order has been delivered!")
                resolve()
            }, 1500)
        })
    })

    .catch((err) => {
        // If any step fails
        console.log("Error: ", err)
    })
    .finally(() => {
        // Always runs — success or failure
        setTimeout(() => {
            console.log("🍽️ Thanks for using FoodExpress!")
        }, 1500)
>>>>>>> f3536c4cfe5da1381202e93f9a8329dfbe0672a7
    })