const { Pool } = require('pg');

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl: {
        rejectUnauthorized: false,  // Добавляем поддержку SSL
    },
});

pool.connect((err, client, release) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }

    console.log('The database is connected');

    const sql = `
        CREATE TABLE IF NOT EXISTS cars (
            id SERIAL PRIMARY KEY,
            name TEXT NOT NULL,
            price REAL NOT NULL,
            description TEXT
        );
    `;

    client.query(sql, (err) => {
        if (err) {
            console.error('Error creating table:', err);
        }

        release();
    });
});

module.exports = pool;