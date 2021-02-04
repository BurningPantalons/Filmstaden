async function readMovieJson() {
  let movie = "movie";
  let jsonMovies = await $.getJSON("/json/filmer.json");
  showMovieAsHtml(jsonMovies, movie);
}

readMovieJson();