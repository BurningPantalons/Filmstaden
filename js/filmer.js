async function readMovieJson() {
  let jsonMovies = await $.getJSON("/json/filmer.json");
  showDocumentAsHtml(jsonMovies);
}

readMovieJson();