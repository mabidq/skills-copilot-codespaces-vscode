// Create web server

const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/commentsController');

router.get('/', commentsController.comments_list);

module.exports = router;
function comments_list(req, res) {
    res.send('NOT IMPLEMENTED: comments list');
}