const Plant = require('../models/Plant');



// Retrieve All the plant
exports.getAllPlants = async (req, res) => {
    try {
        const plants = await Plant.findAll();
        res.json(plants);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Retrieve plant by ID
exports.getPlantById = async (req, res) => {
    try {
        const plant = await Plant.findByPk(req.params.id);
        if (!plant) return res.status(404).json({ error: "Plant not found" });
        res.json(plant);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Create a plant
exports.createPlant = async (req, res) => {
    try {
        const plant = await Plant.create(req.body);
        res.status(201).json(plant);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


// Update a plant by ID
exports.updatePlant = async (req, res) => {
  try {
    const plant = await Plant.findByPk(req.params.id);
    if (!plant) return res.status(404).json({ error: "Plant not found" });

    await plant.update(req.body);
    res.json(plant);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a plant by ID
exports.deletePlant = async (req, res) => {
  try {
    const plant = await Plant.findByPk(req.params.id);
    if (!plant) return res.status(404).json({ error: "Plant not found" });

    await plant.destroy();
    res.json({ message: "Plant deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
