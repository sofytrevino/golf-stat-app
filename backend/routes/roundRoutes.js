const express = require('express');
const router = express.Router();
const { insertRound } = require('../controllers/userRoundController')

router.post('/insert-round', insertRound);

module.exports = router;