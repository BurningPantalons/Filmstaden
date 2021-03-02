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

*/

/*    -- CREATE DATABASE & TABLES --
      Function "initDb" creates non-existing tables
      Uncomment below and run if tables do not yet exist.

      After successful run, open database2 file in sqlite3Studio
      Be sure to check All files (*) if you can not find "database2" in /db.


  //* UNCOMMENT BELOW TO CREATE DATABASE & TABLES */
  initDb();





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

  console.log(`Connected to database via best-sqlite3-frontend`);

});


function initDb() {

    let dataConnect;

    //require('best-sqlite3-frontend');
    //const bestSqlite = require('best-sqlite3');
    const sqlite3 = require('sqlite3').verbose();
    const databaseName = 'database2';

    //const bestdb = await bestSqlite.connect(`./db/${database}`);

    //For creating non-existing tables
    dataConnect = new sqlite3.Database(`./db/${databaseName}`);

    console.log(`** NOTE: initDB will create tables via standard sqlite3`);
    console.log(`** Connected to the ${databaseName} SQLite database via standard sqlite3`);
    

  /* DE-COMMENT any method call to create tables */

 createUsers(dataConnect);
 async function createUsers(db) {
   try {
     await db.run(/*sql*/`create table IF NOT EXISTS users(
     id int auto_increment,
     fornamn varchar(100),
     efternamn varchar(100),
     password varchar(100),
     email varchar(100),
     primary key(email)
  );`);
    console.log('Table users ready.');
   }
   catch(error) {
    console.log('Catched an error, table users might already exist.');
  }

 }

  
  createSalonger(dataConnect);
  async function createSalonger(db) {
    try {
      await db.run(/*sql*/`create table IF NOT EXISTS salonger(
      id int auto_increment,
      name varchar(100),
      primary key (id)
  );`);
    console.log('Table salonger ready.');
   }
   catch(error) {
    console.log('Catched an error, table salonger might already exist.');
  }
}

  
  createStolar(dataConnect);
  async function createStolar(db) {
  try{
   await db.run(/*sql*/`create table IF NOT EXISTS stolar(
      id int auto_increment,
      status boolean,
      visning_id int,
      salong_id int,
      /*foreign key (salong_id) references salonger(id),
      foreign key (visning_id) references visningar(id),*/
      primary key (id)
  );`);
    console.log('Table stolar ready.');
  }
  catch(error) {
    console.log('Catched an error, table stolar might already exist.');
  }
}


  
  createVisningar(dataConnect);
  async function createVisningar(db) {
    try {
    await db.run(/*sql*/`create table IF NOT EXISTS visningar(
    id int auto_increment, 
    datum datetime,
    tid time,
    film_id int,
    salong_id int,
    /*foreign key (film_id) references filmer(id),
    foreign key (salong_id) references salonger(id),*/
    primary key (id)
  );`);
    console.log('Table visningar ready.');
  }
catch(error) {
 console.log('Catched an error, table visningar might already exist.');
  }
}
  
  createFilmer(dataConnect);  //tveksam om denna behövs?
  async function createFilmer(db) {
    try {
    await db.run(/*sql*/`create table IF NOT EXISTS filmer( 
    id int auto_increment,
    title varchar(100), primary key (id)
  );`);
    console.log('Table filmer ready.');
  }
  catch(error) {
   console.log('Catched an error, table filmer might already exist.');
    }
  }
    
  createBokningar(dataConnect);
  async function createBokningar(db) {
    try {
    await db.run(/*sql*/`create table IF NOT EXISTS bokningar(
      bokning_id varchar (10),
      mail varchar(100),
      titel varchar(100),
      salong int,
      datum varchar(100),
      tid varchar(100),
      antal int,
      /*foreign key (mail) references users(mail),
      foreign key (stol_id) references stolar(id),*/
      primary key (bokning_id)
  );`);
    console.log('Table bokningar ready.');
  }
  catch(error) {
   console.log('Catched an error, table bokningar might already exist.');
    }
  }
  
  createBiljettTable(dataConnect);
  async function createBiljettTable(db) {
    try {
    await db.run(/*sql*/`create table IF NOT EXISTS biljetter(
      id INTEGER PRIMARY KEY,
      bokning_id int,
      titel varchar(100),
      stolnr int,
      salong int,
      datum varchar(100),
      tid varchar(100),
      foreign key (titel) references bokningar(titel),
      foreign key (datum) references bokningar(datum),
      foreign key (tid) references bokningar(tid),
      foreign key(bokning_id) references bokningar(bokning_id)
    /*foreign key(stolnr) references stolar(id)*/
    );`);
    console.log('Table biljetter ready.');
  }
  catch(error) {
   console.log('Catched an error, table biljetter might already exist.');
    }
  }

  console.log('** Done creating neccesary tables.'); 
}

  

  



    
   //testInsert(db)
   async function testInsert(db) {
    await db.run(/*sql*/ `insert into users(fornamn, efternamn, email, password) VALUES ('Fisken', 'Termosson', 'fangamig23@test.com', 'fiskesposuger21');`);
    console.log('Sent data to users');
  }




//preparedStatement(db, "Olle");
/* 
FUNGERAR - prepared statement är ett kontrakt för att undvika SQL Injections. 
Inte 100% att denna är HELT korrekt.
*/
  async function preparedStatement(db, fornamn, efternamn) {
    let stmt = await db.run(/*sql*/`
    SELECT * FROM users WHERE fornamn = $fornamn`, {
      $fornamn: fornamn
    });
  
    console.table(stmt);
  }
  