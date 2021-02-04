async function readMovieJson() {
  let movie = "movie";
  let jsonMovies = await $.getJSON("/json/filmer.json");
  showMovieAsHtml(jsonMovies, movie);
}

readMovieJson();

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
      if (key == "Poster") { 
        $document.append(`<img src=${value}>`)
      }

    $('.rightside').append($document);

  }
}
}