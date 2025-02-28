const clientController = require('../controllers/ClientController');
const express = require('express');
const router = express.Router();

router
    .route('/all')
    .get(clientController.getClients);
router
    .route('/:clientId')
    .get(clientController.getClientById);
router
    .route('/create')
    .post(clientController.create);
router
    .route('/update/:clientId')
    .put(clientController.update);
router
    .route('/delete/:clientId')
    .delete(clientController.deleteClient);

module.exports = router;