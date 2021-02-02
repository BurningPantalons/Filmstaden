
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
<<<<<<< Updated upstream
  let jsonVisningar = await $.getJSON("/JSON filer/visningar.json");
  let result = [];
  for (let i in jsonVisningar) {
    result.push(jsonVisningar[i]);
  }
  console.log(result);
=======
	let jsonVisningar = await $.getJSON("/JSON_filer/visningar.json");
	let result = [];
	for (let i in jsonVisningar) {
		result.push(jsonVisningar[i]);
	}
	console.log(result);
>>>>>>> Stashed changes
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
      let NumOfSeatsOnRow = salong[key];
      $salong.append('<div><span>' + key + ': <span>' + NumOfSeatsOnRow + '</div>');


      if (key == "seatsPerRow") {
        for (let i = 0; i < NumOfSeatsOnRow[i]; i++) {
          $salong.append('<div class="seat">' + NumOfSeatsOnRow[i] + '</div>');
        }
      }
    }

    $('.leftside').append($salong);
    $('.leftside').append("<br>");

  }
}



readSalongJson();
readMovieJson();