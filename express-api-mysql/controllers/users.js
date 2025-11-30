const mysql = require('../mysql');

const all = (req, res) => {
    const sql = 'SELECT * FROM users';

    mysql.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({
                message: 'Database query error',
            })
        }

        res.status(200).json(results);
    });
};

const user = (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM users WHERE id = ?';

    mysql.query(sql, [id], (err, results) => {
        if (err) {
            return res.status(500).json({
                message: 'Database query error',
            });
        }

        if (!results.length) {
            return res.status(404).json({
                message: 'User not found',
            });
        }

        res.status(200).json(results[0]);
    });
};

const add = (req, res) => {
    const { name, username, phone, email, age, address } = req.body;
    const sql = 'INSERT INTO users (name, username, phone, email, age, address) VALUES (?, ?, ?, ?, ?, ?)';
    const values = [name, username, phone, email, age, address];

    mysql.query(sql, values, (err) => {
        if (err) {
            console.log(err);

            return res.status(500).json({
                message: 'Database insert error',
            })
        }

        res.status(201).json({
            message: 'User created',
        });
    });
};

const edit = (req, res) => {
    const { id } = req.params;
    const { name, username, phone, email, age, address } = req.body;
    const sql = 'UPDATE users SET name = ?, username = ?, phone = ?, email = ?, age = ?, address = ? WHERE id = ?';
    const values = [name, username, phone, email, age, address, id];

    mysql.query(sql, values, (err, results) => {
        if (err) {
            return res.status(500).json({
                message: 'Database update error',
            })
        }

        if (!results.affectedRows) {
            return res.status(404).json({
                message: 'User not found',
            })
        }
        
        res.status(200).json({
            message: 'User updated',
        });
    });
};

const remove = (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM users WHERE id = ?';

    mysql.query(sql, [id], (err, results) => {
        if (err) {
            return res.status(500).json({
                message: 'User delete error',
            })
        }

        if (!results.affectedRows) {
            return res.status(404).json({
                message: 'User not found',
            })
        }

        res.status(200).json({
            message: 'User deleted',
        });
    });
};

module.exports = {
    all,
    user,
    add,
    edit,
    remove,
}