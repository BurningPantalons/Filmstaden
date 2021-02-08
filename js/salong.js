
function showSalongerAsHtml(collection) {

  for (let salong of collection) {

    let $salong = $('<div class="salong"></div>');
    
   //$salong.append('<form'>  ); 

    for (let key in salong) {
      let value = salong[key];
      $salong.append('<div><span>' + key + ': <span>' + value + '</div>');

      if (key == "seatsPerRow") {
        let numOfSeats = value;

        for (let row = 0; row < numOfSeats[row]; row++) {
          $salong.append('<div class="rowhead">' + "Row " + row + '</div>');
          let $row = $('<div class="row"></div>');
          for (let seat = 0; seat < numOfSeats[row]; seat++) {
            $row.append(`<input type="checkbox" value="${seat}">` +`<label>${seat}</label>`);
            $salong.append($row);
          }
        }

      }
    }

    $('.BookingMain').append($salong);
    $('.BookingMain').append("<br>");

  }
}

readSalongJson();