const db = require('../sqlite3');

const all = (req, res) => {
    const sql = 'SELECT * FROM products';

    db.all(sql, function (error, products) {
        if (error) {
            return res.status(500).json({
                message: error.message,
            });
        }

        res.status(200).json(products);
    });
};

const product = (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM products WHERE id = ?';

    db.get(sql, [id], function (error, product) {
        if (error) {
            return res.status(500).json({
                message: error.message,
            });
        }

        if (!product) {
            return res.status(404).json({
                message: 'Product not found',
            });
        }

        res.status(200).json(product);
    });
};

const add = (req, res) => {
    const { name, description, price } = req.body;

    if (!name || !price) {
        return res.status(400).json({ 
            message: 'Name and price are required',
        });
    }

    const sql = 'INSERT INTO products (name, description, price) VALUES (?, ?, ?)';
    const values = [name, description, price];

    db.run(sql, values, function (error) {
        if (error) {
            return res.status(500).json({
                message: error.message,
            });
        }

        res.status(201).json({
            message: 'Product created successfully',
        });
    });
};

const edit = (req, res) => {
    const { id } = req.params;
    const { name, description, price } = req.body;

    if (!name || !price) {
        return res.status(400).json({
            message: 'Name and price are required',
        });
    }

    const sql = 'UPDATE products SET name = ?, description = ?, price = ? WHERE id = ?';
    const values = [name, description, price, id];

    db.run(sql, values, function (error) {
        if (error) {
            return res.status(500).json({
                message: error.message,
            });
        }

        if (!this.changes) {
            return res.status(404).json({
                message: 'Product not found',
            });
        }

        res.status(200).json({
            message: 'Product updated successfully',
        });
    });
};

const remove = (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM products WHERE id = ?';

    db.run(sql, [id], function (error) {
        if (error) {
            return res.status(500).json({
                message: error.message,
            });
        }

        if (!this.changes) {
            return res.status(404).json({
                message: 'Product not found',
            });
        }

        res.status(200).json({
            message: 'Product deleted successfully',
        });
    });
};

module.exports = {
    all,
    product,
    add,
    edit,
    remove,
}