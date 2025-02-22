const express = require ('express');
const router = express.Router();
const userController = require('../controllers/UsersController');

router
    .route('/all')
    .get(userController.getUsers);
    
// router
//     .route('/create')
//     .post(userController.createUser)
// router
//     .route('/update/:userId')
//     .put(userController.updateUser)
module.exports = router;