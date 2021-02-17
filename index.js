connectToExpress();


/* SQLITE 
The basic functionality of require is that it reads a JavaScript file, 
executes the file, and then proceeds to return the exports object. 
*/

let startDatabase = require('./backend/tables.js');


/* EXPRESS */
function connectToExpress() {

  const express = require('express');
  const app = express();
  const port = 3003;
  const path = require('path');


  app.use(express.static(path.join(__dirname + '/')));

  app.get('/', (req, res) => {
    res.redirect('/');
  })

  var server = app.listen(port, () => {
    console.log('Example listeningen to port 3003..');
  })
}

