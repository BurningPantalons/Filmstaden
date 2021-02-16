connectToExpress();


/* SQLITE */
// const sqlite3 = require('sqlite3').verbose();

// let db = new sqlite3.Database('./db/database2');




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

