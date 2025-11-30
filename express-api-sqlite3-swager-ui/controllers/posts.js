const db = require('../sqlite3');

const all = (req, res) => {
    const sql = 'SELECT * FROM posts';

    db.all(sql, (error, posts) => {
        if (error) {
            return res.status(500).json({ 
                message: error.message, 
            });
        }

        res.status(200).json(posts);
    });
};

const post = (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM posts WHERE id = ?';

    db.get(sql, [id], (error, post) => {
        if (error) {
            return res.status(500).json({ 
                message: error.message, 
            });
        }

        if (!post) {
            return res.status(404).json({ 
                message: 'Post not found', 
            });
        }

        res.status(200).json(post);
    });
};

const add = (req, res) => {
    const { title, body } = req.body;

    if (!title || !body) {
        return res.status(400).json({ 
            message: 'Title and body are required',
        });
    }

    const sql = 'INSERT INTO posts (title, body) VALUES (?, ?)';
    const values = [title, body];

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
    const { title, body } = req.body;

    if (!title || !body) {
        return res.status(400).json({ 
            message: 'Name and price are required',
        });
    }

    const sql = 'UPDATE posts SET title = ?, body = ? WHERE id = ?';
    const values = [title, body, id];

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
    const sql = 'DELETE FROM posts WHERE id = ?';

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
    post, 
    add, 
    edit, 
    remove, 
};