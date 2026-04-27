const Fruit = require('../models/Fruit');

// CREATE
exports.create = async (req, res) => {
    try {
        const newFruit = new Fruit(req.body);
        const savedFruit = await newFruit.save();
        res.status(201).json(savedFruit);
    } catch (err) {
        res.status(500).json({ error: "Could not add fruit" });
    }
};

// FETCHFRUITS
exports.fetchfruits = async (req, res) => {
    try {
        const fruits = await Fruit.find();
        res.status(200).json(fruits);
    } catch (err) {
        res.status(500).json({ error: "Could not fetch fruits" });
    }
};

// UPDATE
exports.update = async (req, res) => {
    try {
        const updatedFruit = await Fruit.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedFruit);
    } catch (err) {
        res.status(500).json({ error: "Update failed" });
    }
};

// DELETE
exports.delete = async (req, res) => {
    try {
        await Fruit.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Fruit deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: "Deletion failed" });
    }
};