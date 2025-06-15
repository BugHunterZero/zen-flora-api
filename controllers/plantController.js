const Plant = require('../models/Plant');

exports.getAllPlants = async (req, res) => {
    try {
        const plants = await Plant.findAll();
        res.json(plants);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getPlantById = async (req, res) => {
    try {
        const plant = await Plant.findByPk(req.params.id);
        if (!plant) return res.status(404).json({ error: "Plant not found" });
        res.json(plant);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createPlant = async (req, res) => {
    try {
        const plant = await Plant.create(req.body);
        res.status(201).json(plant);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
