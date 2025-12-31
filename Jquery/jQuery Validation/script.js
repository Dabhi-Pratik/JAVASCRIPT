$(document).ready(() => {
    $("#form").validate({
        rules: {
            name: {
                required: true,
                minlength: 2,
            },
            email: {
                required: true,
                email: true,
            },
            password: {
                required: true,
                minlength: 6,
            },

        },

        message: {
            name: {
                required: "Name is Required..!",
                minlength: "Minimum 3 Character is Required...!",
            },
            email:{
                required:"Email is Required...!",
                email:"Invalid Email....!",
            },
            password:{
                required:"Password is Required...!",
                minlength:"Password must have atLeast 6 Character long Required...!",
            },
        }
    })
})