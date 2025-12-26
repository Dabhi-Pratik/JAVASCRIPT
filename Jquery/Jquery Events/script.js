// Run code only after the document is fully loaded

// $(document).ready(()=>{
// Click event on button
// Increases image size on single click
//     $("#btn").click(()=>{
//         $("#img").css({
//             width:"600px",
//             height:"400px"  
//         })
//     })
// })


// Double click event on button
// Makes image full screen
$(document).ready(() => {
    $("#btn").dblclick(() => {
        $("#img").css({
            width: "100%",
            height: "100vh"
        })
    })
})


// Mouse enter event on image
// Zoom image when mouse enters
$(document).ready(() => {
    $("#img").mouseenter(() => {
        $("#img").css({
            width: "100%",
            height: "100vh"
        })
    })
})


// Mouse leave event on image
// Restore image size when mouse leaves
$(document).ready(() => {
    $("#img").mouseleave(() => {
        $("#img").css({
            width: "600px",
            height: "400px"
        })
    })
})

// Keyup event
// Triggers when any key is released
$(document).ready(() => {
    $(document).keyup(() => {
        console.log("Key Up Event Triggered")
    })
})

// Keydown event
// Triggers when any key is pressed
$(document).ready(() => {
    $(document).keydown(() => {
        console.log("Key Down Event Triggered")
    })
})