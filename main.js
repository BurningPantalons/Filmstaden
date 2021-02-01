
/* Hämtar JSON-data från fil och lägger i variabel jsonMovies */
/* Kör sedan funktionen showDocumentAsHtml() med argumentet jsonMovies */
async function readMovieJson() {
  let jsonMovies = await $.getJSON("/JSON filer/filmer.json");
  showDocumentAsHtml(jsonMovies);
}

<<<<<<< HEAD
/* The "for...of" statement creates a loop iterating over iterable objects (document)
   $document creates a div for each object.*/
=======
async function readSalongJson() {
  let jsonSalong = await $.getJSON("/JSON filer/salonger.json");
  console.log(jsonSalong);
  showSalongerAsHtml(jsonSalong)
}

>>>>>>> 3118669511fd738555c36b2f5f4d7f90ae8934f9
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