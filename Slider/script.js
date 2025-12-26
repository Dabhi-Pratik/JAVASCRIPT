const img = [
    "./img/p-1.jpg",
    "./img/p-2.jpg",
    "./img/p-3.jpg",
    "./img/p-4.jpg",
    "./img/p-5.jpg",
    "./img/p-6.jpg",
]

let index = 0;

const slide = document.getElementById("slid")

const prevClick = () =>{
    index--;

    if(index <0 ){
        index = img.length-1;
    }

    slide.src=img[index]
    
}

setInterval(nextClick = () =>{
    index++;

    if(index >= img.length-1 ){
        index = 0;
    }

    slide.src=img[index]

},5000)

