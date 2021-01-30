//Som besökare vill jag få information om filmer jag kan se på biograferna.
let movie = "Guardians of the Galaxy Vol. 2"; 
$.getJSON(
  "http://www.omdbapi.com/?i=tt3896198&apikey=b1b5d454",
  function (data) {
    if (data.Title === movie) {
      let result =
        '{ "Title":' +
        '"' +
        data.Title +
        '"' +
        "," +
        '"Synapse":' +
        '"' +
        data.Plot +
        '"' +
        "," +
        '"Actors":' +
        '"' +
        data.Actors +
        '"' +
        "," +
        '"Director":' +
        '"' +
        data.Director +
        '"' +
        "," +
        '"Runtime":' +
        '"' +
        data.Runtime +
        '"' +
        "}";
      jsonResult = JSON.parse(result);
      return console.log(jsonResult);
    }
  }
);