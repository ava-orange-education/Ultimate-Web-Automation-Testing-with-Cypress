// dbMySQL.js
const mysql = require('mysql2/promise');

async function getMySqlData(sql) {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'your_database'
  });

  try {
    const [rows] = await connection.query(sql);
    return rows;
  } finally {
    await connection.end();
  }
}

module.exports = { getMySqlData }; 
