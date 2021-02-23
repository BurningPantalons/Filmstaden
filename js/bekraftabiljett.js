/* Create the tickets number*/
function ticketNumber() {
    let result           = '';
    let characters       = 'ABCDEF6789';
    let charactersLength = characters.length;
    for ( let i = 0; i < characters.length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    console.log(result);
    return result;
 }

 ticketNumber();



 /*put the value of tickets number in html*/
 
 document.getElementById("ticketsNumber").innerHTML = 'Biljettnummer: ' + ticketNumber();