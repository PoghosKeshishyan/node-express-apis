const Alien = require('../models/Alien');

const all = async (req, res) => {
    try {
        const aliens = await Alien.find();
        res.status(200).json(aliens);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

const alien = async (req, res) => {
    const { id } = req.params;

    try {
        const alien = await Alien.findById(id);

        if (!alien) {
            return res.status(404).json({
                message: 'Alien not found',
            });
        }

        res.status(200).json(alien);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

const add = async (req, res) => {
    const { name, tech, sub } = req.body;

    if (!name || !tech) {
        return res.status(400).json({
            message: 'Name and tech are required',
        });
    }

    const alien = new Alien({ name, tech, sub });

    try {
        const newAlien = await alien.save();
        res.status(201).json(newAlien);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

const edit = async (req, res) => {
    const { id } = req.params;
    const { name, tech, sub } = req.body;

    if (!name || !tech) {
        return res.status(400).json({
            message: 'Name and tech are required',
        });
    }

    try {
        const alien = await Alien.findByIdAndUpdate(
            id, 
            { name, tech, sub }, 
            { new: true }
        );

        if (!alien) {
            return res.status(404).json({
                message: 'Alien not found',
            });
        }

        res.status(200).json(alien);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

const remove = async (req, res) => {
    const { id } = req.params;

    try {
        const alien = await Alien.findByIdAndDelete(id);

        if (!alien) {
            return res.status(404).json({
                message: 'Alien not found',
            });
        }

        res.status(200).json({
            message: 'Alien deleted successfully',
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

module.exports = {
    all,
    alien,
    add,
    edit,
    remove,
};