async function readMovieJson() {
  let jsonMovie = await $.getJSON("/JSON filer/filmer.json");
  console.log(jsonMovie);

  showDocumentAsHtml(jsonMovie)
}

async function readSalongJson() {
  let jsonSalong = await $.getJSON("/JSON filer/salonger.json");
  console.log(jsonSalong);
  showSalongerAsHtml(jsonSalong)
}

function showDocumentAsHtml(collection) {

  for (let document of collection) {
    let $document = $('<div class="document"></div>');

    for (let key in document) {
      let value = document[key];
      $document.append('<div><span>' + key + ': <span>' + value + '</div>');
    }

    $('.rightside').append($document);
    $('.rightside').append("<br>");

  }
}

function showSalongerAsHtml(collection) {

  for (let document of collection) {
    let $document = $('<div class="document"></div>');

    for (let key in document) {
      let value = document[key];
      $document.append('<div><span>' + key + ': <span>' + value + '</div>');
    }

    $('.leftside').append($document);
    $('.leftside').append("<br>");

  }
}



readSalongJson();
readMovieJson();