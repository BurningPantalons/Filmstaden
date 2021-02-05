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
  <img src=${document.Poster} />

  <div class="MovieText">
   <h1 class="title">${document.Title}</h1>
   <h2 class="Årtal"> Årtal ${document.Year} </h2>
   </div>

   <div class="MovieButton">
    <button type="button">Läs Mer!</button>
    <button type="button">Boka Biljett!</button>
  </div>
  
</div>`);

     $('.MovieMain').append($document);
    
   
}
}

