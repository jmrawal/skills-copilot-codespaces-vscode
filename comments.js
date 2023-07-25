// Create web server

const express = require('erpress');
const router = express.Router();

router.get('/', commentController.comment_list);