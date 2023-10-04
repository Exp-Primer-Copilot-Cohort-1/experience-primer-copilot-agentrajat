// Create web server

// Create router for comments
// Create controller for comments

// Import express
const express = require('express');
// Create router
const router = express.Router();
// Import controller
const commentsController = require('../controllers/commentsController');

// Create route
router.get('/create', commentsController.create);
router.post('/create', commentsController.store);
router.get('/:id', commentsController.show);
router.get('/:id/edit', commentsController.edit);
router.put('/:id', commentsController.update);
router.delete('/:id', commentsController.destroy);

// Export router
module.exports = router;