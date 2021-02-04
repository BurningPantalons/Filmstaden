
/* Hämtar JSON-data från fil och lägger i variabel jsonMovies */
/* Kör sedan funktionen showDocumentAsHtml() med argumentet jsonMovies */

/*flyttad till filmer.js - David*/

/*Läs in JSON för visningar, Loopa igenom och gör en visningslista*/
async function readSalongJson() {
  let jsonSalong = await $.getJSON("/json/salonger.json");
  console.log(jsonSalong);
  showSalongerAsHtml(jsonSalong)
}

async function readVisiningJson() {
  let jsonVisningar = await $.getJSON("/json/visningar.json");
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

