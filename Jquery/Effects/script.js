$(document).ready(() => {

    $("#hide").click(() => {
        $("#img").hide(1000);
    })

    $("#show").click(() => {
        $("#img").show(1000);
    })

    $("#toggle").click(() => {
        $("#img").toggle(1000);
    })

    $("#fadeIn").click(() => {
        $("#img").fadeIn(1000);
    })

    $("#fadeOut").click(() => {
        $("#img").fadeOut(1000);
    })

    $("#fadeToggle").click(() => {
        $("#img").fadeToggle(1000);
    })

    $("#slideUp").click(() => {
        $("#img").slideUp(1000);
    })

    $("#slideDown").click(() => {
        $("#img").slideDown(1000);
    })

    $("#slideToggle").click(() => {
        $("#img").slideToggle(1000);
    })

    $("#stop").click(() => {
        $("#img").stop();
    })
})