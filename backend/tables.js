
 
 
 




 // THIS DOCUMENT IS NOT IN USE 
 // 
 // ONLY A LIBRARY OF FUNCTIONS
 




 
 //testInsert
 async function testInsert(db) {
  await db.run(/*sql*/ `insert into users(fornamn, efternamn, email, password) VALUES ('Fisken', 'Termosson', 'fangamig@test.com', 'fiskesposuger21');`);
  console.log('Sent data to users');
}

//createUsers();
async function createUsers() {
 await db.run(/*sql*/`create table users(
   id int auto_increment,
   fornamn varchar(100) not null,
   efternamn varchar(100) not null,
   password varchar(100) null,
   email varchar(100) unique null,
   primary key(id)
);`);
  console.log('Created table users');
}

//createSalong(db);
async function createSalong(db) {
  await db.run(/*sql*/`create table salonger(
    id int auto_increment,
    name varchar(100),
    primary key (id)
);`);
  console.log('Created table salong');
}

//createStolar(db);
async function createStolar(db) {
  await db.run(/*sql*/`create table stolar(
    id int auto_increment,
    status boolean,
    visning_id int,
    salong_id int,
    foreign key (salong_id) references salonger(id),
    foreign key (visning_id) references visningar(id),
    primary key (id)
);`);
  console.log('Created table stolar');
}

//createVisningar(db);
async function createVisningar(db) {
  await db.run(/*sql*/`create table visningar(
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
}

//createFilmer(db);  //tveksam om denna behövs?
async function createFilmer(db) {
  await db.run(/*sql*/`create table filmer( 
  id int auto_increment,
  title varchar(100), primary key (id)
);`);
  console.log('Created table filmer');
}

//createBokningar(db);
async function createBokningar(db) {
  await db.run(/*sql*/`create table bokningar(
    id int auto_increment,
    user_id int,
    stol_id int,
    mail varchar(100),
    foreign key (user_id) references users(id),
    foreign key (stol_id) references stolar(id),
    primary key (id)
);`);
  console.log('Created table bokningar');
}


//createBiljetter(db);
async function createBiljetter(db) {
  await db.run(/*sql*/`create table biljetter(
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
}
