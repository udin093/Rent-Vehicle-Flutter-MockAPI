const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authenticate = require('../middlewares/auth')

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/profile', authenticate, userController.getProfile);

module.exports = router;