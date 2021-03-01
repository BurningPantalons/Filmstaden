let choosenScreening = {}; /* Global variable med values från vald film och visning */
let valdaPlatser = {};

let bokning = [];
let biljett = new Array(10);

let allTickets = [];

let bokning_id;

pickMovie();
showMoviePoster();


async function showMoviePoster() {
  let movies = await $.getJSON("/json/filmer.json"); /* läser in json.filmer */

  for (let document of movies) {  /*loopar igenom filmer och tar ut varje poster värde som är en bild och lägger den i en img tag */
    let $document = $(/*html*/`<div class="colPoster">
    <img class="biljettPoster" src=${document.Poster}  />
      <div class="middle" onclick="showAvailableTimes('${document.Title}')">
        <div class="pText">Välj Film</div>
        </div>
    </div>
  `);
    $('.moviePoster').append($document);
  }
};


async function pickMovie() {
  let jsonMovies = await $.getJSON("/json/filmer.json");  /*läser in json.filmer*/

  let filmval = $(/*html*/`  
    <div class="sammanfattning">

    <div class="filmval">
    <p for="dropdownmovie">Välj film:</p>  
    <select class="dropdownmenu" id="dropdownmovie" name="dropdownmovie" onchange="pickTime(value); showAvailableTimes(value)"></select>
  </div>
  <div class="sammanfattning2"> `
  );




  $('.pickMovie').append(filmval);

  for (let movies of jsonMovies) {
    let $option = $(`<option value="${movies.Title}">${movies.Title}</option>`); /* loopar igenom filmerna vi läst in från jsonMovies, Tar title värdet och appendar det på vår select med namn "movies" */
    $('#dropdownmovie').append($option);
  }

};

async function showAvailableTimes(title) {
  let screenings = await $.getJSON("/json/visningar.json"); /* läser in json.visningar */
  screenings = screenings.filter(scr => scr.titel === title); /*Matchar den titeln vi får som parameter i funktionsanropet med alla titlar i visningar som vi läser in skapar en ny array med alla matchningar. */


  let $document = $(/*html*/`<div class="scrSelect">
    <p for="visningmenu">Välj visning:</p>
    <select class="dropdownmenu" id="dropdownvisning" name="visningmenu" onchange="selectedScreening()">     
    </select>
    </div>
    `);
  $('.pickScreening').html($document);

  /*html struktur rad 59-64 där vi skapar en select lista med visningar */

  for (const [key, value] of Object.entries(screenings)) {
    let $option = $(`<option value="${value.datum}_${value.tid}_${value.salong}_${value.titel}">${value.datum} ${value.tid} Salong ${value.salong}</option>`);

    $('#dropdownvisning').append($option);
  }
};  /*loopar igenom de matchningar vi får från screenings och plockar ut värdena och lägger i vår select "visning" */


function selectedScreening() {
  let data = $("#dropdownvisning").val().split("_") /*Data hämtar värden från vald visning i vår select"visning" och lägger i en array */
  console.log(data)
  let screening = { datum: data[0], tid: data[1], salong: data[2], titel: data[3] }  /*screening pekar på objektet så vi kan plocka ut de värden vi vill */
  choosenScreening = { ...screening }
  console.log(screening)

  //Sammanfattar ens valda tid och film ovan salong
  
  
  
  appendSelect();
}

async function appendAvailableSeats(sal) {

  let saloon = await $.getJSON("/json/salonger.json"); /*Läser in json.salonger */
  selectedRoom = saloon.filter(r => r.name === sal)[0] /* matchar salong namnen från salonger.json med parametern sal som får värdet efter vald visning, Hämtar första objektet från arrayen som skapas*/

  let html = `<div class="salong"> <div class="salongName"> <span> ${choosenScreening.salong} </div> <h3> FILMDUK </h3> <div class="filmduk"> </div>`;

  let seatNr = 1;
  let salongRad = 1;

  selectedRoom.seatsPerRow.forEach(rowSize => { /* för varje rad skapar vi en div */
    html = html + `<div class="rowhead"> RAD ${salongRad} </div> <div class="row" id=rad${salongRad}>`
    salongRad++;
    for (let i = 0; i < rowSize; i++) { /* för varje iteration i raden/rowSize skapar vi en checkbox med ett värde*/
      html = html + (/*html*/`<div><input class="checkbox" type="checkbox" name="seat" value="${seatNr}">` + `<label></label></div>`);
      seatNr++;
    }
    html = html + `</div></br>`
  })
  html = html + `<button id="seatBtn" class="seatBtn">Boka platser!</button></div></div>` /*skapar en button */
  $(".pickScreening").html(html);

  

  const seatBtn = document.querySelector('#seatBtn'); /* tar tag i seatBtn*/

  seatBtn.addEventListener('click', (event) => {  /*lyssnar när vi klickar på seatBtn och kallar på metod som kollar vilka säten som är iklickade och skriver ut värdena i en alert. */
    getSelectedSeatValue("seat");

    if (choosenScreening.seats.length != allTickets) {
      alert("Du måste välja rätt antal säten" + "(" + allTickets + ")");
      return;
    }


    else {
      let mail = prompt('Ange din mail för bokningsbekräftelse.');

      validemail = ValidateEmail(mail);

      if (validemail) {

        alert("Du har bokat platserna " + getSelectedSeatValue("seat") + '\n' + "till filmen" + ` ${choosenScreening.titel} \n ${choosenScreening.datum} ${choosenScreening.tid} salong ${choosenScreening.salong}.
      \n Bokningsbekräftelse är skickad till ${mail}. \n Vänligen hämta ut biljetterna senast 10 minuter för visning.`);

      //Creates ticketnumber
      bokning_id = ticketNumber();
      

        //Creates a booking to sqlite3 for each seat booked.
        for (i = 0; i < choosenScreening.seats.length; i++) {
          biljett = [mail, choosenScreening.titel, choosenScreening.seats[i], choosenScreening.salong, choosenScreening.datum, choosenScreening.tid, choosenScreening.seats.length];

          bokning.push(biljett);
          createBiljetter(biljett);
         

          /*Save the values of film choose*/

          localStorage.setItem(`email`, `${mail}`);
          localStorage.setItem(`title`, `${choosenScreening.titel}`);
          localStorage.setItem(`date`, `${choosenScreening.datum}`);
          localStorage.setItem(`time`, `${choosenScreening.tid}`);
          localStorage.setItem(`salong`, `${choosenScreening.salong}`);
          localStorage.setItem(`seat`, getSelectedSeatValue("seat"));
          localStorage.setItem(`row`, `${salongRad}`);
        }
        createBooking(biljett);
      }

    }

  });
}


function ValidateEmail(mail) {

  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
    return (true)
  }
  alert("You have entered an invalid email address!")
  return (false)
}

/* Create the ticket number*/

function ticketNumber() {
  let result = '';
  let characters = 'ABCDEF6789';
  let charactersLength = characters.length;
  for (let i = 0; i < characters.length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

async function createBiljetter(biljett) {
  db.run("BEGIN TRANSACTION");

    //Deconstructing the biljett
    let [mailen, titeln, stolnr, salongen, datumet, tiden, antal] = biljett;

    let stmt = await db.run(`
      insert into biljetter(bokning_id, titel, stolnr, salong, datum, tid) VALUES ($bokning_id, $titeln, $stolnr, $salongen, $datumet, $tiden);`, {
      bokning_id,
      titeln,
      stolnr,
      salongen,
      datumet,
      tiden
    })
    db.run("COMMIT");;

}


async function createBooking(bokning) {

  db.run("BEGIN TRANSACTION");
  //Deconstructing the biljett
  let [mailen, titeln, stolnr, salongen, datumet, tiden, antalet] = bokning;

  let stmt = await db.run(`
      insert into bokningar(bokning_id, mail, titel, salong, datum, tid, antal) VALUES ($bokning_id, $mailen, $titeln, $salongen, $datumet, $tiden, $antalet);`, {
    bokning_id,
    mailen,
    titeln,
    salongen,
    datumet,
    tiden,
    antalet
  }
  )
  db.run("COMMIT");
  ;

  console.log(stmt);
  console.table(stmt);
}


function getSelectedSeatValue(seat) {
  const checkBoxes = document.querySelectorAll(`input[name="${seat}"]:checked`); /*tar tag i de säten som i iklickade */
  let values = [];

  checkBoxes.forEach((checkbox) => { /*varje varje iklickat säte sätter vi in dess värde i values[] */
    values.push(checkbox.value);
  });
  choosenScreening.seats = [...values]

  console.log(choosenScreening)

  return values;
}


function pickTime(value) {
  console.log(value);
  //clears the times in html to enable a new movie choice
  $('.valdtid').html(`</div>`);
  $('.sammanfattning2').html(`</div>`);
}






function appendSelect() {

  let $html = $(/*html*/`
  <div class="container">
  <p >Välj typ av biljett!</p>
    <div class="selectOne">
    <p for="barnS">Barn</p>
      <select class ="barnSelect" name="barnS">
      </select>
     </div> 
      <div class="selectTwo">
      <p for="vuxenS">Vuxen</p>
      <select class ="vuxenSelect" name="vuxenS">
      </select>
     </div>   
     <div class="selectThree">
       <p for="pensS">Pensionär</p>
      <select class ="pensSelect" name="pensS">
      </select>
     </div> 
        <div class="btnContainer">
        <button id="ticketBtn" class="ticketBtn" onclick="getTicketValue()">Boka platser!</button>
        
        </div>
     </div>
     `)

  $('.pickScreening').html($html);

  

  let $barnS = $(".barnSelect");
  for (i = 0; i <= 10; i++) {
    $barnS.append($('<option></option>').val(i).html(i))
  }
  let $vuxenS = $(".vuxenSelect");
  for (i = 0; i <= 10; i++) {
    $vuxenS.append($('<option></option>').val(i).html(i))
  }

  let $penS = $(".pensSelect");
  for (i = 0; i <= 10; i++) {
    $penS.append($('<option></option>').val(i).html(i))

  }

}

function getTicketValue() {

  appendAvailableSeats(choosenScreening.salong)

  let barnTickets = parseInt($(".barnSelect").val());
  console.log(barnTickets);

  let vuxenTickets = parseInt($(".vuxenSelect").val());
  console.log(vuxenTickets);

  let pensTickets = parseInt($(".pensSelect").val());
  console.log(pensTickets);

  ticketSum = barnTickets + vuxenTickets + pensTickets;

  allTickets.splice(0, 1, ticketSum)

  barnTicketPris = barnTickets * 65;

  vuxenTicketsPris = vuxenTickets * 85;

  pensTicketsPris = pensTickets * 75;

  prisSumma = barnTicketPris + vuxenTicketsPris + pensTicketsPris;

$('.sammanfattning2').html(`<div class="valdtid"> Datum: ${choosenScreening.datum} &nbsp;&nbsp; Tid: ${choosenScreening.tid} Antal biljetter: ${allTickets}</div>`);


  

}









