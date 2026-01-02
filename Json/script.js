const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 2499,
        category: "Electronics",
        image: "https://images.pexels.com/photos/610945/pexels-photo-610945.jpeg"
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 3999,
        category: "Electronics",
        image: "https://images.pexels.com/photos/23474/pexels-photo.jpg"
    },
    {
        id: 3,
        name: "Bluetooth Speaker",
        price: 1899,
        category: "Electronics",
        image: "https://images.pexels.com/photos/11103381/pexels-photo-11103381.jpeg"
    },
    {
        id: 4,
        name: "DSLR Camera",
        price: 28999,
        category: "Electronics",
        image: "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg"
    },
    {
        id: 5,
        name: "Gaming Mouse",
        price: 1299,
        category: "Accessories",
        image: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg"
    },
    {
        id: 6,
        name: "Laptop Backpack",
        price: 1799,
        category: "Accessories",
        image: "https://images.pexels.com/photos/936081/pexels-photo-936081.jpeg"
    },
    {
        id: 7,
        name: "Sunglasses",
        price: 999,
        category: "Fashion",
        image: "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg"
    },
    {
        id: 8,
        name: "Running Shoes",
        price: 3499,
        category: "Fashion",
        image: "https://images.pexels.com/photos/1580267/pexels-photo-1580267.jpeg"
    },
    {
        id: 9,
        name: "Leather Handbag",
        price: 2699,
        category: "Fashion",
        image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg"
    },
    {
        id: 10,
        name: "Coffee Maker",
        price: 4599,
        category: "Home Appliances",
        image: "https://images.pexels.com/photos/2159106/pexels-photo-2159106.jpeg"
    },
    {
        id: 11,
        name: "Kitchen Blender",
        price: 2999,
        category: "Home Appliances",
        image: "https://images.pexels.com/photos/8845657/pexels-photo-8845657.jpeg"
    },
    {
        id: 12,
        name: "Smartphone",
        price: 15999,
        category: "Electronics",
        image: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg"
    },
    {
        id: 13,
        name: "Wireless Charger",
        price: 1199,
        category: "Accessories",
        image: "https://images.pexels.com/photos/15921116/pexels-photo-15921116.jpeg"
    },
    {
        id: 14,
        name: "Dumbbells Set",
        price: 2199,
        category: "Fitness",
        image: "https://images.pexels.com/photos/8032923/pexels-photo-8032923.jpeg"
    },
    {
        id: 15,
        name: "Study Table Lamp",
        price: 899,
        category: "Home Decor",
        image: "https://images.pexels.com/photos/2168382/pexels-photo-2168382.jpeg"
    }
];

const productList = document.getElementById("productList")

products.forEach((p) => {
    productList.innerHTML += `
     
     <div class=col-md-4 col-sm-12>
        <div class="card productCard text-center " >
            <img src="${p.image}" class="card-img-top " alt="${p.name}">
                <div class="card-body">
                <h3 class="card-title">${p.name}</h3>
                <h5>₹${p.price}</h5>
        <button class="btn btn-primary" onClick=addItem(${p.id})>Add to Cart</button>
    </div>
</div>

     </div>
    
    `
})

const cartItems = JSON.parse(localStorage.getItem("cartData")) || [];


const addItem = (id) => {
    const item = cartItems.find(prod => prod.id === id);

    if (item) {
        item.qty++;
    } else {
        const product = products.find(prod => prod.id === id);
        cartItems.push({ ...product, qty: 1 });
    }

    localStorage.setItem("cartData", JSON.stringify(cartItems));
    console.log(cartItems);
};





