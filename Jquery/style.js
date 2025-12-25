// $(selector).action()
// Document ready ensures jQuery runs after page loads


$(document).ready(() => {

    // Select all <p> elements and change text color to red
    $("p").css("color", "red")
    // Change font size of all <p> elements

    $("p").css("font-size", "25px")

    // Select paragraph using class selector and set color to blue
    $(".para-2").css("color", "blue")

    // Select <p> which is direct child of <div> and set color to brown
    $("div>p").css("color", "brown")

    // Select paragraph using id selector and set color to green
    $("#para-4").css("color", "green")

    // Attribute selector: select elements having href attribute
    // Remove underline from anchor tag
    $("[href]").css("text-decoration", "none")
    $("[href]").css("font-size", "  30px")

    // Child selector: select <li> elements inside <ul>
    $("ul>li").css("font-size", "20px")

    // Change text color of list items
    $("ul>li").css("color", "gray")

})