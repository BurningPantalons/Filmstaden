initDb();

function initDb() {
  try {
    let database = 'database2';
    const sqlite3 = require('sqlite3').verbose();

    /* Creating a new, or connecting to existing database */
    db = new sqlite3.Database(`./db/${database}`);

    console.log(`Connected to the ${database} SQLite databse`);
  }
  catch (e) {
    console.log('Something went wrong. Check database options');
    console.error(e);
  }
}


//testInsert(db);
function testInsert(db) {
  db.run(/*sql*/ `insert into users(fornamn, efternamn, email, password) VALUES ('Eveee', 'Garysson', 'Eeveeman@test.com', 'flareon007');`);
  console.log('Sent data to users');
  db.close();
}

//createUsers(db);
function createUsers(db) {
  db.run(/*sql*/`create table users(
   id int auto_increment,
   fornamn varchar(100) not null,
   efternamn varchar(100) not null,
   password varchar(100) null,
   email varchar(100) unique null,
   primary key(id)
);`);
  console.log('Created table users');
  db.close();
}

//createSalong(db);
function createSalong(db) {
  db.run(/*sql*/`create table salonger(
    id int auto_increment,
    name varchar(100),
    primary key (id)
);`);
  console.log('Created table salong');
  db.close();
}

//createStolar(db);
function createStolar(db) {
  db.run(/*sql*/`create table stolar(
    id int auto_increment,
    status boolean,
    visning_id int,
    salong_id int,
    foreign key (salong_id) references salonger(id),
    foreign key (visning_id) references visningar(id),
    primary key (id)
);`);
  console.log('Created table stolar');
  db.close();
}

//createVisningar(db);
function createVisningar(db) {
  db.run(/*sql*/`create table visningar(
  id int auto_increment, 
  datum datetime,
  tid time,
  film_id int,
  salong_id int,
  foreign key (film_id) references filmer(id),
  foreign key (salong_id) references salonger(id),
  primary key (id)
);`);
  console.log('Created table visningar');
  db.close();
}

//createFilmer(db);  //tveksam om denna behövs?
function createFilmer(db) {
  db.run(/*sql*/`create table filmer( 
  id int auto_increment,
  title varchar(100), primary key (id)
);`);
  console.log('Created table filmer');
  db.close();
}

//createBokningar(db);
function createBokningar(db) {
  db.run(/*sql*/`create table bokningar(
    id int auto_increment,
    user_id int,
    stol_id int,
    mail varchar(100),
    foreign key (user_id) references users(id),
    foreign key (stol_id) references stolar(id),
    primary key (id)
);`);
  console.log('Created table bokningar');
  db.close();
}


//createBiljetter(db);
function createBiljetter(db) {
  db.run(/*sql*/`create table biljetter(
    id int auto_increment,
    bokning_id int,
    typ varchar(50),
    pris int,
    stolnr int,
    user_id int,
    foreign key(user_id) references users(id),
    foreign key(bokning_id) references bokningar(id),
    foreign key(stolnr) references stolar(id),
    primary key (id)
  );`);
  console.log('Created table biljetter');
  db.close();
}