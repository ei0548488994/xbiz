const express = require('express');
const router = express.Router();


const {
    nearPlacesBySearch
} = require('../controllers/places');
router.get('/nearPlacesBySearch/:key/:location', nearPlacesBySearch)
module.exports = router;