const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');
const authenticate = require('../middlewares/auth');

router.get('/', vehicleController.getVehicles);
router.post('/', authenticate, vehicleController.createVehicle);

module.exports = router;