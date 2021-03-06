/*listening to the label username/email */

let email = $("#username").focusout(function () {
  email = $("#username").val();
  emailValidation(email);
});


/*listening to the label password*/

let pass = $("#pass").focusout(function () {
  pass = $("#pass").val();
  emptyPass(pass);
  return pass;
});

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
     // alert('Email is not valid');
    }
    else {
      return username;
    }
  }
  else {
   // alert('email is to short');
  }
}
/* Validate if password is empty*/

function emptyPass(password) {
  if (password.length < 4) {
   // alert('password is to short');
  }
  else {
    return password;
  }
}

/*  Function to submit fields*/
function doSubmit() {
  loggIn(email, pass);
  localStorage.clear();              
  localStorage.setItem("email", email);
}

/*Validate email and show the booknings of user */ 
async function loggIn(email, pass) {
  db.run("BEGIN TRANSACTION");
  let stmt = await db.run(`
      SELECT email, password FROM users WHERE email = $email and password = $pass;`, {
    email,
    pass
  })
  db.run("COMMIT");
  for (key of stmt) {
    for (i in key) {
      if (key[i] === pass) {
       //alert('du är inloggad');
        showBokning(email);
      }
    }
    return stmt;
  }
  $("#logindenied").remove();
  $(".field_v2").append(`<p id="logindenied" class="notification"> Felaktigt användarnamn eller lösenord </p> `);

}
/*Show the values of bookning*/
async function showBokning(mail) {
  let showBook = [];
  stmt = await db.run(`
SELECT bokning_id, titel, salong, datum, tid, antal FROM bokningar WHERE mail = $mail;`, {
  mail
  })
  for (key of stmt) {
    for (i in key) {
      showBook.push(key[i]);
  }
}

$('.showBooking').append(`<p>showBoook</p>`);
//alert('Dina Bokningar är: ' + showBook);
}
