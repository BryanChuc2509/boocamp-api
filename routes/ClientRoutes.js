const router = express.Router();
const clientController = require('../controllers/ClientController');
const express = require('express');

router
    .router('/all')
    .get(clientController.getClients);


module.exports = router;