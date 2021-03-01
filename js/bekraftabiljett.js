
/* Global variables*/

let rowsSalongOne = [];
let rowsSalongTwo = [];
let seatsInTheRowInArray = [];
let seatRow = [];
let seatsInTheRow;


/*Function to read String and create a array*/

function StringToArray(string) {
  let array = [];
  for (let i = 0; i < string.length; i++) {
    array.push(string[i]);
  }
  return array;
}

/*put the value of ticket number in html and create the number of tycket*/

let tycketNummer = document.getElementById("ticketsNumber").innerHTML = 'Ditt bokningsnummer är ' + bokning_id;
let title = document.getElementById("title").innerHTML = localStorage.getItem(`title`, `${choosenScreening.titel}`);
let date = document.getElementById("date").innerHTML = localStorage.getItem(`date`, `${choosenScreening.datum}`);
let salong = document.getElementById("salong").innerHTML = 'SALONG:  ' + localStorage.getItem(`salong`, `${choosenScreening.salong}`);
let time = document.getElementById("time").innerHTML = localStorage.getItem(`time`, `${choosenScreening.tid}`);
let email = document.getElementById("email").innerHTML = localStorage.getItem(`email`, `${choosenScreening.mail}`);
let seats = document.getElementById("seat").innerHTML = localStorage.getItem(`seat`, seat);
let rowsInSalong = document.getElementById("row").innerHTML = 'RÅD/PLATS:  ' + CreateNumberOfRow(seats, salong);
let poster = localStorage.getItem(`poster`, `${document.Poster}`);

/* Create a array with seat-row*/

function seatByRow(SeatInSalong, seatsInTheRow) {

  for (let i = 0; i < seatsInTheRow.length; i++) {
    if (seatsInTheRow.length <= SeatInSalong.length) {
      let x = seatsInTheRow[i];
      let y = SeatInSalong[i];
      a = ' (' + y + ' - ' + x + ') ';
      seatRow.push(a);
    }
  }
  return seatRow;
}

/* Reading and typing the variables to seach the row*/

function CreateNumberOfRow(seats, salong) {

  /* Scoop Variables*/

  let salongNumber = salong.slice(9, 10);
  let seatPlace = seats.toString();
  seatsInTheRow = seatPlace.split(',');

  /*Confirm Number of salong and create Array of the rows for Salong 1 */

  if (salongNumber == '1') {
    for (let i = 0; i < seatsInTheRow.length; i++) {
      if (seatsInTheRow[i] < 7) {
        rowsSalongOne.push(1);
      }
      if (seatsInTheRow[i] > 6 && seatsInTheRow[i] < 13) {
        rowsSalongOne.push(2);
      }
      if (seatsInTheRow[i] > 12 && seatsInTheRow[i] < 21) {
        rowsSalongOne.push(3);
      }
      if (seatsInTheRow[i] > 20 && seatsInTheRow[i] < 29) {
        rowsSalongOne.push(4);
      }
      if (seatsInTheRow[i] > 28 && seatsInTheRow[i] < 39) {
        rowsSalongOne.push(5);
      }
      if (seatsInTheRow[i] > 38 && seatsInTheRow[i] < 49) {
        rowsSalongOne.push(6);
      }
    }
    let result = seatByRow(rowsSalongOne, seatsInTheRow);
    return (result);
  }

  /*Confirm Number of salong and create Array of  the rows for Salong 2 */

  if (salongNumber == '2') {
    for (let i = 0; i < seatsInTheRow.length; i++) {
      if (seatsInTheRow[i] < 8) {
        rowsSalongTwo.push(1);
      }
      if (seatsInTheRow[i] > 7 && seatsInTheRow[i] < 15) {
        rowsSalongTwo.push(2);
      }
      if (seatsInTheRow[i] > 14 && seatsInTheRow[i] < 22) {
        rowsSalongTwo.push(3);
      }
      if (seatsInTheRow[i] > 21 && seatsInTheRow[i] < 29) {
        rowsSalongTwo.push(4);
      }
      if (seatsInTheRow[i] > 28 && seatsInTheRow[i] < 36) {
        rowsSalongTwo.push(5);
      }
      if (seatsInTheRow[i] > 35 && seatsInTheRow[i] < 43) {
        rowsSalongTwo.push(6);
      }
    }
    let result = seatByRow(rowsSalongTwo, seatsInTheRow);
    return (result);
  }
}
let seatsByRow = CreateNumberOfRow(seats, salong);
function rowBySeat(seatsByRow) {
  let e = 0;
  for (let i = 0; i < seatsByRow.length; i++) {
    let a = seatsByRow[i];
    let result = [];
    let final;
    for (let i = 0; i < seatsByRow.length; i++) {
      let changeSide = seatsByRow[i].split('-');
      let firstToSecound = changeSide[0];
      let secoundToFirst = changeSide[1];
      final = secoundToFirst + '-' + firstToSecound;
      result.push(final);
    }
    return result;
  }
}

rowBySeat(seatsByRow);
CreateNumberOfRow(seats, salong);

/* Look for Poster of Movie*/

readJsonToMoviePoster();
async function readJsonToMoviePoster() {
  let movies = await $.getJSON("/json/filmer.json");
  for (let i = 0; i < movies.length; i++) {
    for (key of movies) {
      for (i in key) {
        if (key[i] == title) {
          movieTitle = key[i];
          let moviePost = key["Poster"];
          let $document = $(/*html*/`<div class="bookning">
          <img class="poster" src=${moviePost}/>
          `);
         $('.poster').append($document); 
        }
      }
    }
  }
}

