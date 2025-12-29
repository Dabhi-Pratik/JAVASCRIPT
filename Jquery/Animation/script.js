// Run code only after page is fully loaded
$(document).ready(() => {

    // When Animate button is clicked
    $("#animate").click(() => {
        $("#img")
            // First animation:
            // Image width reduces to 0 and opacity decreases
            .animate({ width: "0px", opacity: 0.2 }, 2000)
            // Second animation:
            // Image returns to original size and opacity
            .animate({ width: "600px", opacity: 1 }, 1000);
    });
});





