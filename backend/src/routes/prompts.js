const express = require('express');
const router = express.Router();
const promptController = require('../controllers/promptController');

// Public prompt endpoints
router.get('/', promptController.getPrompts);
router.get('/featured', promptController.getFeaturedPrompts);
router.get('/categories', promptController.getCategories);
router.get('/models', promptController.getModels);
router.get('/:slug', promptController.getPromptBySlug);
router.post('/:id/copy', promptController.trackCopy);
router.post('/:id/like', promptController.trackLike);

module.exports = router;
