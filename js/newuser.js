

/*listening to the label email*/

let email = $("#email").focusout(function () {
    let email = $("#email").val();
    emailValidation(email);
});


/*listening to the label password*/

let newPassword = $("#pass1").focusout(function () {
    let pass = $("#pass1").val();
    emptyPass(pass);
    return pass;
});


/*listening to the label password confirm*/

let passConfirm = $("#pass2").focusout(function () {
    let pass2 = $("#pass2").val();
    emptyPass(pass2);
    validatepass();
    return pass2;
});


/*Confirm if passwords matche*/

function validatepass(){9
    if ( ($("#pass2").val()) !== ($("#pass1").val())){
        alert('Passwords do not matche');
        $('input[name=password').val('');
    }
}

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

  function emptyPass(password){
      if (password.length<4){
          alert('password is to short');
      }
      else{
          return password;
      }
  }

