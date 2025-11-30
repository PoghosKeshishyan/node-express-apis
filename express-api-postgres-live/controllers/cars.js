const postgres = require('../postgres');

const all = (req, res) => {
    const sql = 'SELECT * FROM cars';

    postgres.query(sql, (error, result) => {
        if (error) {
            return res.status(500).json({
                message: 'Error fetching cars',
            });
        }

        res.status(200).json(result.rows)
    });
};

const car = (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM cars WHERE id = $1';

    postgres.query(sql, [id], (error, result) => {
        if (error) {
            return res.status(500).json({
                message: 'Error fetching car',
            });
        }

        if (!result.rowCount) {
            return res.status(404).json({
                message: 'Car not found',
            })
        }

        res.status(200).json(result.rows[0]);
    });
};

const add = (req, res) => {
    const { name, price, description } = req.body;
    const sql = 'INSERT INTO cars (name, price, description) VALUES ($1, $2, $3) RETURNING *';
    const values = [name, price, description];

    postgres.query(sql, values, (error, result) => {
        if (error) {
            return res.status(500).json({
                message: 'Error inserting car',
            });
        }

        res.status(201).json(result.rows[0]);
    });
};

const edit = (req, res) => {
    const { id } = req.params;
    const { name, price, description } = req.body;
    const sql = 'UPDATE cars SET name = $1, price = $2, description = $3 WHERE id = $4';
    const values = [name, price, description, id];

    postgres.query(sql, values, (error, result) => {
        if (error) {
            return res.status(500).json({
                message: 'Error updating car',
            });
        }

        if (!result.rowCount) {
            return res.status(404).json({
                message: 'Car not found',
            });
        }

        res.status(200).json({
            message: 'Car updated successfully',
        });
    });
};

const remove = (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM cars WHERE id = $1';

    postgres.query(sql, [id], (error, result) => {
        if (error) {
            return res.status(500).json({
                message: 'Error deleting car',
            });
        }

        if (!result.rowCount) {
            return res.status(404).json({
                message: 'Car not found',
            });
        }

        res.status(200).json({
            message: 'Car deleted successfully',
        });
    });
};

module.exports = {
    all,
    car,
    add,
    edit,
    remove,
}