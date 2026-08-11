// Create web server for comments routes
const express = require('express');
const router = express.Router();

// Controller placeholder - adjust path if your controllers live elsewhere
const commentController = require('./controllers/commentController');

// Routes for comments
router.get('/', commentController.comment_list);
router.get('/create', commentController.comment_create_get);
router.post('/create', commentController.comment_create_post);
router.get('/:id/delete', commentController.comment_delete_get);
router.post('/:id/delete', commentController.comment_delete_post);

module.exports = router;

//Create web server       


