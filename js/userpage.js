
let mail = localStorage.getItem("email");

/*Show the values of bookning*/

async function showBokning(mail) {
    let showBook = [];
    stmt = await db.run(`
  SELECT bokning_id, titel, salong, datum, tid, antal FROM bokningar WHERE mail = $mail;`, {
        mail
    })
    for (key of stmt) {
        let x = 0;
        for (i in key) {
            showBook.push("  " + key[i]);
        } 
       if (x<6){
        showBook.push('<br>');
        x++;
       } 
    }
    $(".appendBook").append(showBook);
}
showBokning(mail);
$(".user").append("Välkommen: " + mail);