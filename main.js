async function readMovieJson() {
  let jsonMovie = await $.getJSON("/JSON filer/filmer.json");
  console.log(jsonMovie);

  showDocumentAsHtml(jsonMovie)
}

function showDocumentAsHtml(collection) {

  for (let document of collection) {
    let $document = $('<div class="document"></div>');

    for (let key in document) {
      let value = document[key];
      $document.append('<div><span>' + key + ': <span>' + value + '</div>');
    }

    $('body').append($document);
    $('body').append("<br>");

  }
}

readMovieJson();