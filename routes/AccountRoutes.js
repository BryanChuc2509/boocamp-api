const router = express.Router();
const accountController = require("../controllers/AccountController");
const express = require("express");

router
    .route("/all")
    .get(accountController.getAccounts);
router
    .route("/:accountId")
    .get(accountController.getAccountById);
router
    .route("/create")
    .post(accountController.create);
router
    .route("/update/:accountId")
    .put(accountController.update);
router
    .route("/delete/:accountId")
    .delete(accountController.deleteAccount);

module.exports = router;