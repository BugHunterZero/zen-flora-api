const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController'); // 

router.get('/', homeController.getAllHomePageContents);        
router.get('/:id', homeController.getHomePageContentById);     
router.post('/', homeController.createHomePageContent);        
router.put('/:id', homeController.updateHomePageContentById);  
router.delete('/:id', homeController.deleteHomePageContentById); 
module.exports = router;
