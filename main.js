
/* Hämtar JSON-data från fil och lägger i variabel jsonMovies */
/* Kör sedan funktionen showDocumentAsHtml() med argumentet jsonMovies */
async function readMovieJson() {
  let jsonMovies = await $.getJSON("/JSON_filer/filmer.json");
  showDocumentAsHtml(jsonMovies);
}
/*Läs in JSON för visningar, Loopa igenom och gör en visningslista*/
async function readSalongJson() {
  let jsonSalong = await $.getJSON("/JSON_filer/salonger.json");
  console.log(jsonSalong);
  showSalongerAsHtml(jsonSalong)
}

async function readVisiningJson() {
  let jsonVisningar = await $.getJSON("/JSON_filer/visningar.json");
  let result = [];
  for (let i in jsonVisningar) {
    result.push(jsonVisningar[i]);
  }
  console.log(result);
}


/* The "for...of" statement creates a loop iterating over iterable objects (document)
   $document creates a div for each object.*/

function showDocumentAsHtml(collection) {

  for (let document of collection) {
    let $document = $('<div class="document"></div>');

    for (let key in document) {
      let value = document[key];
      $document.append('<div><span>' + key + ': <span>' + value + '</div>');
    }

    $('.rightside').append($document);
    $('.rightside').append("<br>");

  }
}

function showSalongerAsHtml(collection) {

  for (let salong of collection) {
    let $salong = $('<div class="salong"></div>');

    for (let key in salong) {
      let value = salong[key];
      $salong.append('<div><span>' + key + ': <span>' + value + '</div>');

      /* Keys are name & seatsPerRow..
      if key is seatsPerRow
      then for loop will get each value(number of seats) at each index(row) in array of salong */
      if (key == "seatsPerRow") {
        let numOfSeats = value;
        for (let row = 0; row < numOfSeats[row]; row++) {
          $salong.append('<div class="row">' + numOfSeats[row] + '</div>');
        }
      }
    }

    $('.leftside').append($salong);
    $('.leftside').append("<br>");

  }
}



readSalongJson();
readMovieJson();