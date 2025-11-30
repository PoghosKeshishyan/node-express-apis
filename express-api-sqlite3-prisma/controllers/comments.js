const { prisma } = require('../prisma/prisma-client');

const all = async (req, res) => {
    try {
        const comments = await prisma.comment.findMany();
        res.status(200).json(comments);
    } catch (err) {
        res.status(500).json({
            message: 'Database query error',
        });
    }
};

const comment = async (req, res) => {
    const { id } = req.params;
    
    try {
        const comment = await prisma.comment.findUnique({
            where: {
                id,
            },
        });

        if (!comment) {
            return res.status(404).json({
                message: 'Comment not found',
            });
        }

        res.status(200).json(comment);
    } catch (err) {
        res.status(500).json({
            message: 'Database query error',
        });
    }
};

const add = async (req, res) => {
    const data = req.body;

    if (!data.email || !data.body) {
        return res.status(400).json({
            message: 'All fields are required',
        });
    }

    try {
        const comment = await prisma.comment.create({
            data,
        });

        res.status(201).json(comment);
    } catch (err) {
        res.status(500).json({
            message: 'Database insert error',
        });
    }
};

const edit = async (req, res) => {
    const { id } = req.params;
    const data = req.body;

    if (!data.email || !data.body) {
        return res.status(400).json({
            message: 'All fields are required',
        });
    }

    try {
        await prisma.comment.update({
            where: {
                id,
            },
            data,
        });

        res.status(200).json({
            message: 'Comment updated',
        });
    } catch (err) {
        if (err.code === 'P2025') {
            return res.status(404).json({
                message: 'Comment not found',
            });
        }

        res.status(500).json({
            message: 'Database update error',
        });
    }
};

const remove = async (req, res) => {
    const { id } = req.params;

    try {
        await prisma.comment.delete({
            where: {
                id,
            },
        });

        res.status(200).json({
            message: 'Comment deleted',
        });
    } catch (err) {
        if (err.code === 'P2025') {
            return res.status(404).json({
                message: 'Comment not found',
            });
        }

        res.status(500).json({
            message: 'Comment delete error',
        });
    }
};

module.exports = {
    all,
    comment,
    add,
    edit,
    remove,
};