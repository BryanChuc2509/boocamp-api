const router = express.Router();
const accountController = require("../controllers/AccountController");
const express = require("express");

router
    .router("/all")
    .get(accountController.getAccounts);
router
    .router("/:accountId")
    .get(accountController.getAccountById);
router
    .router("/create")
    .post(accountController.create);
router
    .router("/update/:accountId")
    .put(accountController.update);
router
    .router("/delete/:accountId")
    .delete(accountController.deleteAccount);

module.exports = router;