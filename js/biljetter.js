

let filmval = $(`
  <div class="filmval">
    <label for="movies">Välj film:</label>
    <select name="movies" id="movies" onchange="createCalendarDays(); pickTime(value)"></select>
  </div>`);
  
$('.movieChoice').append(filmval);

pickMovie();

async function pickMovie(){
  let jsonMovies = await $.getJSON("/json/filmer.json");
  let i = 1;
  for (let movies of jsonMovies) {
    let $option = $(`<option value="${i}">${movies.Title}</option>`);
    i++;
    $('#movies').append($option);
  }  
};  

function pickTime(value) {
  console.log(value);
}

async function readMovie() {
  let poster = "colPoster";
  let jsonMovies = await $.getJSON("/json/filmer.json");

  showMoviePoster(jsonMovies,poster);
  
}
readMovie();

function showMoviePoster(collection,className) {

  for (let document of collection) {

    let $document = $(`<div class="${className}">
  <img class="biljettPoster" src=${document.Poster} onclick="createCalendar(value)" />
  </div>
  `);
    
    $('.moviePoster').append($document);
    
  }
}







