const express = require('express');
const router = express.Router();
// You'll be creating this controller module next
const flightsCtrl = require('../controllers/flights');

router.get('/', flightsCtrl.index)

router.get('/new', flightsCtrl.new);

router.get('/:id', flightsCtrl.show);

router.post('/', flightsCtrl.create);
	

module.exports = router;

