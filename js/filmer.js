async function readMovieJson() {
  let movie = "movie";
  let jsonMovies = await $.getJSON("/json/filmer.json");
  showMovieAsHtml(jsonMovies, movie);

  console.log(jsonMovies);
}

readMovieJson();

/* The "for...of" statement creates a loop iterating over iterable objects (document)
   $document creates a div for each object.*/

function showMovieAsHtml(collection, className) {

  for (let document of collection) {

    let $document = $(`<div class="${className}">
  <img class="poster" src=${document.Poster} />

  <div class="MovieText">
   <h1 class="Title">${document.Title}   (${document.Year})</h1>
   <p class="Released"> Premiär: ${document.Released} </p> 
   <p class="Synopsis"> ${document.Plot} </p> 
   <p class="Genre"> Genre: ${document.Genre} </p> 
   </div>
   <div class="ButtonContainer">
    <button onclick="navigateToMovieInfo('${document.MovieId}')" class="movieButton" type="button">Läs Mer</button>
    <button onclick="location.href='/html/platsbokning.html?${document.MovieId}'" class="movieButton" type="button">Boka Biljett</button>
  </div>

  </div>
</div>`);

    $('.MovieMain').append($document);


  }
}

function navigateToMovieInfo(MovieId) {
  sessionStorage.setItem("movie", MovieId)
  window.location = `detaljsida.html?${MovieId}`

}







