async function showMovieInfo() {
  let jsonMovies = await $.getJSON("/json/filmer.json");
  let movieId = sessionStorage.getItem("movie");

  let movie = jsonMovies.filter(obj => obj.MovieId === movieId)[0]


  let $title = $(`<title>${movie.Title}</title>`);

  let $trailer = $(`<div class="trailerDiv"> 
  <iframe width="1908" height="810" src="${movie.Trailer}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div >
  `);


  let $document = $(`
  <div class="Detalj">  

  <img class="poster" src=${movie.Poster} />
  <div class="InfoText">
   <h1 class="Title">${movie.Title}  (${movie.Year})</h1>
   <p class="Synopsis"> ${movie.Plot} </p> 

   <p class="writer"> Writers : ${movie.Writers} </p> 
   <p class="director"> Director: ${movie.Director} </p> 
   </div>
   </div>`);


  $('head').append($title);
  $('.infoMain').append($trailer);
  $('.infoMain').append($document);

}

showMovieInfo();