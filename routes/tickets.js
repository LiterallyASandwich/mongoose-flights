const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

// This router is mounted to a "starts with" path of '/'


router.get('/tickets/new', ticketsCtrl.new);

router.post('/tickets', ticketsCtrl.create);

router.post('/flights/:id/tickets', ticketsCtrl.addToTicket);



module.exports = router;