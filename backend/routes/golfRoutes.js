const express = require('express');
const router = express.Router();
const { golfRound } = require('../controllers/golfRoundController')

router.post('/golf-round', golfRound);

module.exports = router;