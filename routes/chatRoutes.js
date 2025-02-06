const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

router.get('/', chatController.getChats);
router.post('/', chatController.createChat);

module.exports = router;