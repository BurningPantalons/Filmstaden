

let filmval = $(`
  <div class="filmval">
    <label for="movies">Välj film:</label>
    <select name="movies" id="movies" onchange="createCalendarDays(); pickTime(value); showAvailableTimes(value)"></select>
  </div>`);
  
$('.movieChoice').append(filmval);

pickMovie();

async function pickMovie(){
  let jsonMovies = await $.getJSON("/json/filmer.json");
  
  for (let movies of jsonMovies) {
    let $option = $(`<option value="${movies.Title}">${movies.Title}</option>`);
    
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
  <img class="biljettPoster" src=${document.Poster} onclick="showAvailableTimes('${document.Title}')" />
  </div>
  `);
    
    $('.moviePoster').append($document);
    
  }
};

async function showAvailableTimes(title){ 
  let screenings = await $.getJSON("/json/visningar.json");
  let titleScreenings = screenings.filter(screening =>  screening.titel === title)
  console.log(titleScreenings);

}







