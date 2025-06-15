const HomePageContent = require('../models/HomePageContent');

exports.getHomePageContent = async (req, res) => {
    try {
        const content = await HomePageContent.findOne();
        res.json(content);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateHomePageContent = async (req, res) => {
    try {
        const content = await HomePageContent.findOne();
        if (!content) {
            const newContent = await HomePageContent.create(req.body);
            return res.status(201).json(newContent);
        }
        await content.update(req.body);
        res.json(content);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
