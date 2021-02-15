

let filmval = $(`
  <div class="filmval">
    <label for="movies">Välj film:</label>
    <select name="movies" id="movies" onchange="createCalendarDays(); pickTime(value); showAvailableTimes(value)"></select>
  </div>`);
  
$('.pickMovie').append(filmval);

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
  screenings = screenings.filter(scr => scr.titel === title);
  
 let $document = $(`<div class="scrSelect">
    <label for="visning">Välj visning:</label>
    <select name="visning" id="visning" onchange="selectedScreening()">     
    </select>
    </div>
    `);
    $('.pickScreening').html($document);
  
  
  
   

  for (const [key, value] of Object.entries(screenings)) { 
    let $option = $(`<option value="${value.datum}_${value.tid}_${value.salong}_${value.titel}">${value.datum} ${value.tid} Salong ${value.salong}</option>`);
    
    $('#visning').append($option);
  }
  
  
  

}

function selectedScreening(e) {
  
    let data = $("#visning").val().split("_")
  let screening = { datum: data[0], tid: data[1], salong: data[2], titel: data[3] }
  console.log(screening)

}






