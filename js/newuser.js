let newName = $("#username").focusout(function () {
    let username = $("#username").val();
    console.log(username);
});

$newEmail = $("#email").focusout(function () {
    let email = $("#email").val();
    console.log(email);
});

let newPassword = $("#pass").focusout(function () {
    let pass = $("#pass").val();
    console.log(pass);
});

let passConfirm = $("#pass2").focusout(function () {
    let pass2 = $("#pass2").val();
    console.log(pass2);
});



/*Functions to validate fields*/



$($newEmail).ready(function () {
    $('#email').click(function () {
        if ($("#email").val().indexOf('@', 0) == -1 || $("#email").val().indexOf('.', 0) == -1) {
            alert('Invalid email');
            console.log('invalid email');
            return false;
        }
        return true;
    });
});

let emailteste = "joao.com";

function $emailValidade(email) {
    for (let i = 0; i < email.size; i++) {
        if (email.charAt(i) === '@') {
            console.log(email.charAt(i));
            break;
        }
        else {
            console.log("email invalido");
        }
        return email;
    }

}