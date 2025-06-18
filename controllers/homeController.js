const HomePageContent = require('../models/HomePageContent');

// GET All
exports.getAllHomePageContents = async (req, res) => {
  try {
    const contents = await HomePageContent.findAll();
    res.json(contents);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET One by ID
exports.getHomePageContentById = async (req, res) => {
  try {
    const content = await HomePageContent.findByPk(req.params.id);
    if (!content) return res.status(404).json({ error: 'Content not found' });
    res.json(content);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST Create
exports.createHomePageContent = async (req, res) => {
  try {
    const newContent = await HomePageContent.create(req.body);
    res.status(201).json(newContent);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// PUT Update
exports.updateHomePageContentById = async (req, res) => {
  try {
    const content = await HomePageContent.findByPk(req.params.id);
    if (!content) return res.status(404).json({ error: 'Content not found' });

    await content.update(req.body);
    res.json(content);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE
exports.deleteHomePageContentById = async (req, res) => {
  try {
    const content = await HomePageContent.findByPk(req.params.id);
    if (!content) return res.status(404).json({ error: 'Content not found' });

    await content.destroy();
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
