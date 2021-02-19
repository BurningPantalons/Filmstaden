
/*

README: 

Run these commands for program to work locally with database.
-------------------------------------------------------------
npm install
npm init -y
npm install express
npm install sqlite3
npm install best-sqlite3
npm install best-sqlite3-frontend
-------------------------------------------------------------

The basic functionality of require is that it reads a JavaScript file, 
executes the file, and then proceeds to return the exports object. 
*/

require('best-sqlite3-frontend')({
  
  importTables: require('./backend/tables.js'),
  bestSqlite3: require('best-sqlite3'),
  databasePath: 'db/database2',
  addDatabaseFunctions: {
    // example of user defined functions
    // (write your own as you go...)
    UP: x => x.toUpperCase(),
    LOW: x => x.toLowerCase()
  },
  express: require('express'),
  port: 3000,
  staticFolder: './'
}).then(({ app, db }) => {

  // if you want to you can
  // do more things with the express app 
  // and the db connection here...

  //Running preparedStatement
  preparedStatement(db, "Eveee");

});

/* FUNGERAR - prepared statement är ett kontrakt för att undvika SQL Injections. 
   Inte 100% att denna är HELT korrekt.
*/
async function preparedStatement(db, fornamn, efternamn) {
  let stmt = await db.run(/*sql*/`
  SELECT * FROM users WHERE fornamn = $fornamn`, {
    $fornamn: fornamn
  });

  console.table(stmt);
}



/*EXPRESS (tidigare server)
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
*/
