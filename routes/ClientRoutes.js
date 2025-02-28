const router = express.Router();
const clientController = require('../controllers/ClientController');
const express = require('express');

router
    .router('/all')
    .get(clientController.getClients);
router
    .router('/:clientId')
    .get(clientController.getClientById);
router
    .router('/create')
    .post(clientController.create);
router
    .router('/update/:clientId')
    .put(clientController.update);
router
    .router('/delete/:clientId')
    .delete(clientController.deleteClient);

module.exports = router;