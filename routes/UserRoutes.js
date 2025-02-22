const express = require ('express');
const router = express.Router();
const userController = require('../controllers/UsersController');

router
    .route('/all')
    .get(userController.getUsers);
router
    .route('/:userId')
    .get(userController.getUserById)
router
    .route('/create')
    .post(userController.create)
router
    .route('/update/:userId')
    .put(userController.update)
router
    .route('/delete/:userId')
    .delete(userController.deleteUser)

module.exports = router;