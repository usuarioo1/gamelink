const express = require('express');
const auth = require('../middleware/auth')
const {getFunko, getFunkoById} = require('../controllers/funkoController')
const funkoRoute = express.Router();

funkoRoute.route('/funkos').get(getFunko);
funkoRoute.route('/funkos/:id').get(getFunkoById)

module.exports = funkoRoute;
