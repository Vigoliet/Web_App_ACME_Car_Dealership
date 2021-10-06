const express = require('express');
const router = express.Router();

// Require controller modules.
const cars_controller = require ('../controllers/carsController');

// Home ROUTES

// Get home page

router.get('/', cars_controller.pelikan); //now we're at localhost/cars so we don't need to spcify further.
router.get('/12', cars_controller.index);

module.exports = router;