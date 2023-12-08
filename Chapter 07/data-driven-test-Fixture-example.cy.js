// db.cjs
const sqlite3 = require('sqlite3').verbose();

// Replace 'database.db' with the path to the file you want to create.
const DB_PATH = 'database.db';

// Connect to the database. If the file does not exist, it will be created.
let db = new sqlite3.Database(DB_PATH, (err) => {
  if (err) {
    console.error(err.message);
    throw err;
  } else {
    console.log('Connected to the SQLite database.');
    db.run(`CREATE TABLE users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username text, 
      password text, 
      email text UNIQUE, 
      active INTEGER
    )`, (err) => {
      if (err) {
        // Table already created
        console.log("Table already exists.");
      } else {
        // Table just created, creating some rows
        const insert = 'INSERT INTO users (username, password, email, active) VALUES (?,?,?,?)';
        db.run(insert, ["user1","password1","user1@example.com",1]);
        db.run(insert, ["user2","password2","user2@example.com",1]);
      }
    });  
  }
});

// Close the database connection
db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');
});
