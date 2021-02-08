renderHtml();


function renderHtml() { 
  let $html = $(`
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Detaljer</title>
    <link rel="stylesheet" href="/styles/style.css">
    <script src='https://kit.fontawesome.com/a076d05399.js'></script>
  </head>

  <body>
  <div class="menyrad">
    <span class="movies"><a href="/html/filmer.html">Tillbaka till filmer</a></span>
  </div>
  </body>
  `);
  $('.filmInfo').append($html); 

};

async function readSpecifikMovie(movie) {
  console.log(movie);
  let URL = `/html/detaljsida.html?${movie}`;
  let movieInfo = URL.split('?').splice(1);
  console.log(movieInfo);
  try {
    let jsonMovies = await $.getJSON("/json/filmer.json");
    //console.log(jsonMovies);

    for (let movieId of jsonMovies) {
      let $movie = movieId.MovieId;
      if ($movie === movieInfo) {
        console.log("movie: " + $movie);
         console.log("movieinfo: " + movieInfo);
        renderMovieInfo(movieInfo);
      }
    }
  }
  catch (e) { }
  
  
}


async function renderMovieInfo(movie) {

  
}