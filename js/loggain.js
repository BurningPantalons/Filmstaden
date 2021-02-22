let name = $("#username").focusout(function(){
    let username = $("#username").val();
    console.log(username);
});

let password = $("#pass").focusout(function(){
  let pass = $("#pass").val();
  console.log(pass);
});