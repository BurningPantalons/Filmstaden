async function showMovieInfo() {
  let jsonMovies = await $.getJSON("/json/filmer.json");
  let movieId = sessionStorage.getItem("movie");
  
  let movie = jsonMovies.filter(obj => obj.MovieId === movieId)[0]
  
  let $document = $(`<div class="test">  

  <div class="MovieText">
   <h1 class="Title">${movie.Title}</h1>
   <div>
   <p class="writer"> Writers : ${movie.Writers} </p> 
   <p class="Synopsis"> Handling: ${movie.Plot} </p> 
   <p class="imdb"> Awards: ${movie.Awards} </p> 
   </div>
   </div>`);

  $('.infoMain').append($document);
  
}

showMovieInfo();