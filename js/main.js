
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

function showMovieAsHtml(collection, className) {

  for (let document of collection) {
    let $document = $(`<div class="${className}"></div>`);

    for (let key in document) {
      let value = document[key];
      
    if (key == "Title") {
      $document.append(`<h1 class="title"> ${value} </h1>`);
    }
    if (key == "Year") {
      $document.append(`<h2> Årtal ${value} </h2>`);
    }

    $('.rightside').append($document);

  }
}
}
