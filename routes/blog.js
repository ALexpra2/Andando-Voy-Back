const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middlewares/cryptoMiddleware');
const { getAllPosts, createPost, updatePost, deletePost } = require('../controllers/blogController');

router.get('/', getAllPosts);
router.post('/', verifyToken, createPost);
router.put('/:id', verifyToken, updatePost);
router.delete('/:id', verifyToken, deletePost);

module.exports = router;
