let filmval = $(`
  <div class="filmval">
    <label for="movies">Välj film:</label>
    <select name="movies" id="movies" onchange="createCalendar(value);"></select>
  </div>`);
  
$('.movieChoice').append(filmval);

pickMovie();

async function pickMovie(){
  let jsonMovies = await $.getJSON("/json/filmer.json");
  let $option;
  let i = 0;
  for (let movies of jsonMovies) {
    $option = $(`<option value="${i}">${movies.Title}</option>`)
    i++;
    $('#movies').append($option);
  }  
};  


function createCalendar(value) {
  console.log(value);
let html = `<div class="month">
  <ul>
    <li class="prev">&#10094;</li>
    <li class="next">&#10095;</li>
    <li>Feb<br><span style="font-size:18px">2021</span></li>
  </ul>
</div>

<ul class="weekdays">
  <li>Mo</li>
  <li>Tu</li>
  <li>We</li>
  <li>Th</li>
  <li>Fr</li>
  <li>Sa</li>
  <li>Su</li>
</ul>

<ul class="days">
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
  <li>6</li>
  <li>7</li>
  <li>8</li>
  <li>9</li>
  <li><span class="active">10</span></li>
  <li>11</li>
  ...etc
</ul>`
}

function pickTime(value) {

}