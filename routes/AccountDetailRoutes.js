const router = express.Router();
const AccountDetailController = require('../controllers/AccountDetailController');
const express = require('express');

router
    .router('/all')
    .get(AccountDetailController.getAccounts);
router
    .router('/:accountId')
    .get(AccountDetailController.getAccountById);
router
    .router('/create')
    .post(AccountDetailController.create);
router
    .router('/update/:accountId')
    .put(AccountDetailController.update);
router
    .router('/delete/:accountId')
    .delete(AccountDetailController.deleteAccount);

module.exports = router;