const sqlite3 = require('sqlite3').verbose();

const dbConnection = new sqlite3.Database('./sqlite3/dev.db', (error) => {
    if (error) {
        console.error('Database connection error:', error.message);
        process.exit(1);
    }

    console.log('Database connected successfully');

    dbConnection.run(`
        CREATE TABLE IF NOT EXISTS products (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            description TEXT,
            price REAL NOT NULL
        )
    `);
});

module.exports = dbConnection;