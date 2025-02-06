const express = require('express');
const router = express.Router();
const rentalController = require('../controllers/rentalController');

router.get('/', rentalController.getRentals);
router.post('/', rentalController.createRental);

module.exports = router;