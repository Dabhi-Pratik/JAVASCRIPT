<<<<<<< HEAD
const cart = ["Shoes", "Cloth", "SmartPhone"];

// ================= PRODUCING CODE =================

// 1) Promise to simulate order creation
const createCart = new Promise((resolve, reject) => {

    if (cart.length > 0) {
        const orderId = 1234;

        setTimeout(() => {
            resolve(orderId);
        }, 2000);

    } else {
        reject("Cart is empty");
    }
});


// 2) Order validation (returns a Promise)
const validateOrder = (orderId) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (cart.length >= 2) {
                resolve(`Order ${orderId} Validated`);
            } else {
                reject("Order Validation Failed: Not enough items");
            }

        }, 1500);
    });
};


// 3) Payment process (existing function)
const paymentInitiated = (orderId) => {
    return new Promise((resolve, reject) => {
        let balance = 5000;

        if (orderId && balance > 0) {
            setTimeout(() => {
                resolve("Payment Initiated");
            }, 2000);

        } else {
            reject("Insufficient Balance");
        }
    });
};


// 4) Shipping process (new Promise)
const startShipping = (orderId) => {
    return new Promise((resolve, reject) => {
        let isReadyToShip = true;

        setTimeout(() => {
            if (isReadyToShip) {
                resolve(`Order ${orderId} shipped successfully 🚚`);
            } else {
                reject("Shipping Failed");
            }
        }, 2500);
    });
};


// ================= CONSUMING CODE =================

createCart
    .then((orderId) => {
        console.log("Order Created with ID:", orderId);
        return validateOrder(orderId);
    })
    .then((valMsg) => {
        console.log(valMsg);
        return paymentInitiated(1234);
    })
    .then((payMsg) => {
        console.log(payMsg);
        return startShipping(1234);
    })
    .then((shipMsg) => {
        console.log(shipMsg);
    })
    .catch((err) => {
        console.log("Error:", err);
    });
=======
const cart = ["Shoes", "Cloth", "SmartPhone"];

// ================= PRODUCING CODE =================

// 1) Promise to simulate order creation
const createCart = new Promise((resolve, reject) => {

    if (cart.length > 0) {
        const orderId = 1234;

        setTimeout(() => {
            resolve(orderId);
        }, 2000);

    } else {
        reject("Cart is empty");
    }
});


// 2) Order validation (returns a Promise)
const validateOrder = (orderId) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (cart.length >= 2) {
                resolve(`Order ${orderId} Validated`);
            } else {
                reject("Order Validation Failed: Not enough items");
            }

        }, 1500);
    });
};


// 3) Payment process (existing function)
const paymentInitiated = (orderId) => {
    return new Promise((resolve, reject) => {
        let balance = 5000;

        if (orderId && balance > 0) {
            setTimeout(() => {
                resolve("Payment Initiated");
            }, 2000);

        } else {
            reject("Insufficient Balance");
        }
    });
};


// 4) Shipping process (new Promise)
const startShipping = (orderId) => {
    return new Promise((resolve, reject) => {
        let isReadyToShip = true;

        setTimeout(() => {
            if (isReadyToShip) {
                resolve(`Order ${orderId} shipped successfully 🚚`);
            } else {
                reject("Shipping Failed");
            }
        }, 2500);
    });
};


// ================= CONSUMING CODE =================

createCart
    .then((orderId) => {
        console.log("Order Created with ID:", orderId);
        return validateOrder(orderId);
    })
    .then((valMsg) => {
        console.log(valMsg);
        return paymentInitiated(1234);
    })
    .then((payMsg) => {
        console.log(payMsg);
        return startShipping(1234);
    })
    .then((shipMsg) => {
        console.log(shipMsg);
    })
    .catch((err) => {
        console.log("Error:", err);
    });
>>>>>>> f3536c4cfe5da1381202e93f9a8329dfbe0672a7
