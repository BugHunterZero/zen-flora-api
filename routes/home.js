const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

router.get('/', homeController.getHomePageContent);
router.post('/', homeController.updateHomePageContent);

module.exports = router;
