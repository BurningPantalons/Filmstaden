
function showSalongerAsHtml(collection) {

  for (let salong of collection) {

    let $salong = $('<div class="salong"></div>');
    
    
   //$salong.append('<form'>  ); 

    for (let key in salong) {
      let value = salong[key];

      if (key == "name") {
      $salong.append('<div class="salongName"> <span>' + value + '</div>');
      $salong.append('<h3> FILMDUK </h3> <div class="filmduk">' + '</div>');


      }

      if (key == "seatsPerRow") {
        let numOfSeats = value;

        for (let row = 1; row < numOfSeats[row]; row++) {
          $salong.append('<div class="rowhead">' + "RAD " + row + '</div>');
          let $row = $('<div class="row"></div>');
          for (let seat = 1; seat < numOfSeats[row]; seat++) {
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