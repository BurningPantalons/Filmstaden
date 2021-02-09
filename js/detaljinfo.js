async function showMovieInfo() {
  let jsonMovies = await $.getJSON("/json/filmer.json");
  let movieId = sessionStorage.getItem("movie");

  let movie = jsonMovies.filter(obj => obj.MovieId === movieId)[0]

  let $document = $(`<div class="Detalj">  
  <img class="poster" src=${movie.Poster} />
  <div class="InfoText">
   <h1 class="Title">${movie.Title}</h1>
   <div>
   <p class="writer"> Writers : ${movie.Writers} </p> 
   <p class="director"> Director: ${movie.Director} </p> 
   <p class="imdb"> ImdbRating: ${movie.imdbRating} </p>
   <p class=imdbVotes> ImdbVotes: ${movie.imdbVotes} </p> 
   </div>
   </div>`);

  $('.infoMain').append($document);

}

showMovieInfo();