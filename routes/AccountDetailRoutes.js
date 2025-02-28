const router = express.Router();
const AccountDetailController = require('../controllers/AccountDetailController');
const express = require('express');

router
    .route('/all')
    .get(AccountDetailController.getAccounts);
router
    .route('/:accountId')
    .get(AccountDetailController.getAccountById);
router
    .route('/create')
    .post(AccountDetailController.create);
router
    .route('/update/:accountId')
    .put(AccountDetailController.update);
router
    .route('/delete/:accountId')
    .delete(AccountDetailController.deleteAccount);

module.exports = router;