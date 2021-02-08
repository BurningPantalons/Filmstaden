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
   
   let $document =  $(`<div class="${className}">
  <img src=${document.Poster} />

  <div class="MovieText">
   <h1 class="title">${document.Title}</h1>
   <div>
   <p class="Released"> Premiär: ${document.Released} </p> 
   <p class="Synopsis"> Handling: ${document.Plot} </p> 
   <p class="Genre"> Genre: ${document.Genre} </p> 
   </div>
   <div class="ButtonContainer">
    <button onclick="location.href='/html/detaljsida.html?${document.MovieId}'" id=${document.MovieId} class="movieButton" type="button">Läs Mer!</button>
    <button onclick="location.href='/html/platsbokning.html?${document.MovieId}'" class="movieButton" type="button">Boka Biljett!</button>
  </div>

  </div>
</div>`);

     $('.MovieMain').append($document);
    
   
}
}




