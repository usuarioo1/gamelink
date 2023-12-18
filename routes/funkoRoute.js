const express = require('express');
const auth = require('../middleware/auth')
const getFunko = require('../controllers/funkoController')
const funkoRoute = express.Router();

funkoRoute.route('/funkos').get(getFunko);

module.exports = funkoRoute;
