
/* Hämtar JSON-data från fil och lägger i variabel jsonMovies */
/* Kör sedan funktionen showDocumentAsHtml() med argumentet jsonMovies */
async function readMovieJson() {
  let jsonMovies = await $.getJSON("/JSON filer/filmer.json");
  showDocumentAsHtml(jsonMovies);
}
/*Läs in JSON för visningar, Loopa igenom och gör en visningslista*/
async function readSalongJson() {
  let jsonSalong = await $.getJSON("/JSON filer/salonger.json");
  console.log(jsonSalong);
  showSalongerAsHtml(jsonSalong)
}

async function readVisiningJson() {
	let jsonVisningar = await $.getJSON("/JSON filer/visningar.json");
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

  for (let document of collection) {
    let $document = $('<div class="document"></div>');

    for (let key in document) {
      let value = document[key];
      $document.append('<div><span>' + key + ': <span>' + value + '</div>');
    }

    $('.leftside').append($document);
    $('.leftside').append("<br>");

  }
}



readSalongJson();
readMovieJson();