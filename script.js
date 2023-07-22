"use strict"

const password_field = document.getElementById('password');
const confirm_field = document.getElementById('confirm');
const my_form = document.getElementById('my-form');

my_form.onsubmit = () => {
    return check_password();
}

function check_password() {
    let password = password_field.value;
    let confirm = confirm_field.value;
    if (password != confirm) {
        alert("Passwords are not the same!")
        return false;
    }
    return true;
}

