
/* Create the ticket number*/

function ticketNumber() {
   let result = '';
   let characters = 'ABCDEF6789';
   let charactersLength = characters.length;
   for (let i = 0; i < characters.length; i++) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
 }
 
 /*put the value of ticket number in html and create the number of tycket*/
 
 let tycketNummer = document.getElementById("ticketsNumber").innerHTML = 'Ditt bokningsnummer är ' + ticketNumber();
 let title = document.getElementById("title").innerHTML = 'TITEL:  ' + localStorage.getItem(`title`, `${choosenScreening.titel}`);
 let date = document.getElementById("date").innerHTML = 'DATUM:  ' + localStorage.getItem(`date`, `${choosenScreening.datum}`);
 let salong = document.getElementById("salong").innerHTML = 'SALONG:  ' + localStorage.getItem(`salong`, `${choosenScreening.salong}`);
 let time = document.getElementById("time").innerHTML = 'TID:  ' + localStorage.getItem(`time`, `${choosenScreening.tid}`);
 let email = document.getElementById("email").innerHTML = localStorage.getItem(`email`, `${choosenScreening.mail}`);
 let seats = document.getElementById("seat").innerHTML = 'PLATS:  ' + localStorage.getItem(`seat`, seat);
 let rowsInSalong = document.getElementById("row").innerHTML = 'RÅD:  ' + readSeat(seats, salong);
 
 /* Reading and typing the variables to seach the row*/
 
 function readSeat(seats, salong) {
   /* Take the values of Salong and seats*/
   let salongNumber = salong.slice(9, 10);
   let seatPlace = seats.toString();
   let seatPlaceClean = seatPlace.slice(8, 200);
   let seatsInTheRow = seatPlaceClean.split(',');
   let rowsSalongOne = [];
   let rowsSalongTwo = [];
 
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
     return (rowsSalongOne);
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
     return (rowsSalongTwo);
   }
 }
 
 readSeat(seats, salong);
 