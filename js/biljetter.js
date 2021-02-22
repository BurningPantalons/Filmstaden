let choosenScreening = {}; /* Global variable med values från vald film och visning */


pickMovie();

async function pickMovie(){
  let jsonMovies = await $.getJSON("/json/filmer.json");  /*läser in json.filmer*/

  
let filmval = $(/*html*/`
  <div class="filmval">
    <label for="movies">Välj film:</label>  
    <select name="movies" id="movies" onchange="pickTime(value); showAvailableTimes(value)"></select>
  </div>`);  

  /* Rad 10-14 filmval skapar html struktur med en selectlista av filmer */
  
$('.pickMovie').append(filmval); 
  
  for (let movies of jsonMovies) {
    let $option = $(`<option value="${movies.Title}">${movies.Title}</option>`); /* loopar igenom filmerna vi läst in från jsonMovies, Tar title värdet och appendar det på vår select med namn "movies" */
    
    $('#movies').append($option); 
  }  
};  

function pickTime(value) {
  console.log(value); 
}


showMoviePoster();

async function showMoviePoster() {
   
  let movies = await $.getJSON("/json/filmer.json"); /* läser in json.filmer */

  for (let document of movies) {  /*loopar igenom filmer och tar ut varje poster värde som är en bild och lägger den i en img tag */

    let $document = $(/*html*/`<div class="colPoster">
  <img class="biljettPoster" src=${document.Poster} onclick="showAvailableTimes('${document.Title}')" />
  </div>
  `);
    
    $('.moviePoster').append($document);
    
  }
};




async function showAvailableTimes(title) { 
  
  let screenings = await $.getJSON("/json/visningar.json"); /* läser in json.visningar */
  
  screenings = screenings.filter(scr => scr.titel === title); /*Matchar den titeln vi får som parameter i funktionsanropet med alla titlar i visningar som vi läser in skapar en ny array med alla matchningar. */
  
 let $document = $(/*html*/`<div class="scrSelect">
    <label for="visning">Välj visning:</label>
    <select name="visning" id="visning" onchange="selectedScreening()">     
    </select>
    </div>
    `);
  $('.pickScreening').html($document);
  
  /*html struktur rad 59-64 där vi skapar en select lista med visningar */
    
  for (const [key, value] of Object.entries(screenings)) { 
    let $option = $(`<option value="${value.datum}_${value.tid}_${value.salong}_${value.titel}">${value.datum} ${value.tid} Salong ${value.salong}</option>`);
    
    $('#visning').append($option);
  } 
  };  /*loopar igenom de matchningar vi får från screenings och plockar ut värdena och lägger i vår select "visning" */

function selectedScreening() {
  
  let data = $("#visning").val().split("_") /*Data hämtar värden från vald visning i vår select"visning" och lägger i en array */
  let screening = { datum: data[0], tid: data[1], salong: data[2], titel: data[3] }  /*screening pekar på objektet så vi kan plocka ut de värden vi vill */
  choosenScreening = {...screening}
  console.log(screening)
  appendAvailableSeats(screening.salong)
}


async function appendAvailableSeats(sal) { 
   
    let saloon = await $.getJSON("/json/salonger.json"); /*Läser in json.salonger */
    selectedRoom = saloon.filter(r => r.name === sal)[0] /* matchar salong namnen från salonger.json med parametern sal som får värdet efter vald visning, Hämtar första objektet från arrayen som skapas*/
    
  let html = '<div class="salong"> <h3> FILMDUK </h3> <div class="filmduk">' + '</div>';

  let seatNr = 1;
  let salongRad = 1;
    selectedRoom.seatsPerRow.forEach(rowSize => { /* för varje rad skapar vi en div */
      html = html + `<div class="rowhead"> RAD ${salongRad} </div> <div class="row">` 
      salongRad++;
        for(let i = 0; i < rowSize; i++) { /* för varje iteration i raden/rowSize skapar vi en checkbox med ett värde*/
            html = html + (/*html*/`<div><input class="checkbox" type="checkbox" name="seat" value="${seatNr}">` +`<label></label></div>`);
            seatNr++;
        }
        html = html + `</div></br>`
    })
    html = html + `<button id="seatBtn">Boka platser!</button></div></div>` /*skapar en button */ 
  $(".pickScreening").html(html);

  const seatBtn = document.querySelector('#seatBtn'); /* tar tag i seatBtn*/

seatBtn.addEventListener('click', (event) => {  /*lyssnar när vi klickar på seatBtn och kallar på metod som kollar vilka säten som är iklickade och skriver ut värdena i en alert. */
  alert("Du har bokat platser Nr: " + getSelectedSeatValue("seat") + " till filmen" +` ${choosenScreening.titel} ${choosenScreening.datum} ${choosenScreening.tid} salong ${choosenScreening.salong}` );

});
  

}



function getSelectedSeatValue(seat) { 
  const checkBoxes = document.querySelectorAll(`input[name="${seat}"]:checked`); /*tar tag i de säten som i iklickade */
  let values = [];
  console.log(choosenScreening)
  checkBoxes.forEach((checkbox) => { /*varje varje iklickat säte sätter vi in dess värde i values[] */
    values.push(checkbox.value);

  });
  return values;
  
}












