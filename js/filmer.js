readMovieJson();

/* The async keyword is added to functions
to tell them to return a promise rather than 
directly returning the value.*/ 

async function readMovieJson() {
  let movie = "movie";
  let jsonMovies = await $.getJSON("/json/filmer.json");
  showMovieAsHtml(jsonMovies, movie);
}


/* The "for let...of" creates a loop
   iterating over iterable objects(document)
   $document creates a div for each object.*/

/* The div class is assinged 
via the constructor parameter  */ 

function showMovieAsHtml(collection, className) {

  for (let document of collection) {

    let $document = $(/*html*/`
    <div class="${className}">
      <img class="poster" src=${document.Poster} />

      <div class="MovieText">
        <h1 class="Title">${document.Title}   (${document.Year})</h1>
        <p class="Released"> Premiär: ${document.Released} </p> 
        <p class="Synopsis"> ${document.Plot} </p> 
        <p class="Genre"> Genre: ${document.Genre} </p> 
      </div>

      <div class="ButtonContainer">

        <!-- Button runs function below --> 
        <button 
          onclick="navigateToMovieInfo('${document.MovieId}')"
          class="movieButton"
          type="button">Läs Mer
        </button>

        <!-- todo> #4 # ! NEED TO CHANGE href TO BILJETTER ! --> 
        <button 
          onclick="location.href='/html/platsbokning.html?${document.MovieId}', testPreparedHere('Eveee')"
          class="movieButton"
          type="button">Boka Biljett
        </button>

      </div>
    </div>`);

    $('.MovieMain').append($document);

  }
}

async function testPreparedHere(fornamn) {
  let stmt = await db.run(`
  SELECT * FROM users WHERE fornamn = $fornamn`, {
    $fornamn: fornamn 
  });
  console.log(stmt);
  console.table(stmt);
  }

/*
"movie" is a key
and holds the value assigned.
*/

function navigateToMovieInfo(MovieId) {
  sessionStorage.setItem("movie", MovieId)
  window.location = `detaljsida.html?${MovieId}`

}



