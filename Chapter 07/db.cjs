cypress.config.js

import { defineConfig } from "cypress";
import sqlite3 from 'sqlite3';
const { verbose } = sqlite3;
const db = verbose().Database;
const DB_PATH = 'database.db';

export default defineConfig({

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      let database = new db(DB_PATH, sqlite3.OPEN_READONLY, (err) => {
        if (err) {
          console.error(err.message);
        }
        console.log('Connected to the SQLite database.');
      });

  on('task', {
    getActiveUsers() {
      return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM users WHERE active = 1';
        database.all(sql, [], (err, rows) => {
          if (err) {
            reject(err);
          }
          resolve(rows);
        });
      });
    }
  });

    },
  }
});

