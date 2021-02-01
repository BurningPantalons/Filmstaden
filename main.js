
/* Hämtar JSON-data från fil och lägger i variabel jsonMovies */
/* Kör sedan funktionen showDocumentAsHtml() med argumentet jsonMovies */
async function readMovieJson() {
  let jsonMovies = await $.getJSON("/JSON filer/filmer.json");
  showDocumentAsHtml(jsonMovies);
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

    $('body').append($document);
    $('body').append("<br>");

  }
}

readMovieJson();