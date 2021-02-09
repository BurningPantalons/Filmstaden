let filmval = $(`
  <div class="filmval">
    <label for="movies">Välj film:</label>
    <select name="movies" id="movies" onchange="createCalendar(value);"></select>
  </div>`);
  
$('.movieChoice').append(filmval);

pickMovie();

async function pickMovie(){
  let jsonMovies = await $.getJSON("/json/filmer.json");
  let i = 0;
  for (let movies of jsonMovies) {
    let $option = $(`<option value="${i}">${movies.Title}</option>`)
    i++;
    $('#movies').append($option);
  }  
};  

function pickTime(value) {

}