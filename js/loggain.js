/*listening to the label username/email */

let name = $("#username").focusout(function () {
  let username = $("#username").val();
  emailValidation(username);
});


/*listening to the label password*/

let password = $("#pass").focusout(function () {
  let pass = $("#pass").val();
});
v
/* Changes the label to empty*/

$("#onclick").click(function () {
  $('input[name=password').val('');
  $('input[name=email').val('');
});


/*Validate email  by '@' and length > 3*/

function emailValidation(username) {
  let result = username.indexOf("@");
  if (username.length > 3) {
    if (result < 0) {
      alert('Email is not valid');
    }
    else {
      return username;
    }

  }
  else {
    alert('email is to short');
  }
}