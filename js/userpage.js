
let mail = localStorage.getItem("email");
console.log(mail);
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
    return showBook;
}
$(".user").append("Välkommen: " + mail);
$(".showBookning").append("Dina bookningar är: " + showBokning(mail));

