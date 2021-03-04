
/*listening to the label email*/

email = $("#email").focusout(function () {
  email = $("#email").val();
  emailValidation(email);
});

/*listening to the label password*/

pass = $("#pass1").focusout(function () {
  pass = $("#pass1").val();
  emptyPass(pass);
  return pass;
});

/*listening to the label password confirm*/

let pass2 = $("#pass2").focusout(function () {
  pass2 = $("#pass2").val();
  emptyPass(pass2);
  validatepass();
});

/* Changes the label to empty*/


$("#onclick").click(function () {
  $('input[name=password').val('');
  $('input[name=email').val('');
});

/*Confirm if passwords matche*/

function validatepass() {
  passToSave = ($("#pass2").val());
  if (($("#pass2").val()) !== ($("#pass1").val())) {
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


function emptyPass(password) {
  if (password.length < 4) {
   
    alert('password is to short');
  }
  else {
    return password;
  }
}

/*  Function to submit fields*/

function doSubmit() {
  existUser(email, pass);
}

/* Create a new username by e-mail*/

async function createUser(email,pass) {
  db.run("BEGIN TRANSACTION");
  let stmt = await db.run(`
      insert into users(email, password) VALUES ($email, $pass);`, {
        email,
        pass
  })
  db.run("COMMIT");
  alert('Du är registrerad på FilmStaden, du kan se dina bokningar i loggain-sessionen');
}
/* Confirm if the user is registered in database, if not insert new user or alert the user is registrated*/

async function existUser(mail) {
  db.run("BEGIN TRANSACTION");
  let stmt = await db.run(`
      SELECT email FROM users WHERE email = $mail;`, {
    mail
  })
  db.run("COMMIT");
  for (key of stmt) {
    for (i in key) {
      if (key[i] === mail) {
        $('.labelImp').append(`<div> <p class="notification"> Email already registered </p> </div>`);
        if (!emailRegistered) {
        emailRegistered = true;
      }
    }
  }
}
createUser(email,pass);
}
