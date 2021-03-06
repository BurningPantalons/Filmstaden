
function showSalongerAsHtml(collection) {

  for (let salong of collection) {

    let $salong = $('<div class="salong"></div>');
    
    for (let key in salong) {
      let value = salong[key];

      if (key == "name") {
      $salong.append('<div class="salongName"> <span>' + value + '</div>');
      $salong.append('<h3> FILMDUK </h3> <div class="filmduk">' + '</div>');


      }

      if (key == "seatsPerRow") {
        let numOfSeats = value;

        for (let row = 0; row < numOfSeats[row]; row++) {
          let salongsRad = row + 1; //salongsRad makes the value of each iteration of row to display as 1 above. Row 0 shows as 1 etc.
          $salong.append('<div class="rowhead">' + "RAD " + salongsRad + '</div>');
          let $row = $('<div class="row"></div>');
          for (let seat = 0; seat < numOfSeats[row]; seat++) {
            $row.append(`<div><input class="checkbox" type="checkbox" value="${seat}">`+`<label></label></div>`);
            $salong.append($row);
          }
        }
      }
    }
    $('.BookingMain').append($salong);
  }
}

readSalongJson();