const express = require ('express');
const router = express.Router();
const usersController = require('../controllers/UsersController');

router
    .route('/all')
    .get(usersController.getUsers);
router
    .route('/login')
    .post(usersController.login);
router
    .route('/register')
    .post(usersController.register);
router
    .route('/:userId')
    .get(usersController.getUserById)
router
    .route('/create')
    .post(usersController.create)
router
    .route('/update/:userId')
    .put(usersController.update)
router
    .route('/delete/:userId')
    .delete(usersController.deleteUser)

module.exports = router;