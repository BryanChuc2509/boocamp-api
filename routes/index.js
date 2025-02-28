const express = require ('express');
const router = express.Router();
const vendorRouter = require('./VendorRoutes');
const userRouter = require('./UserRoutes');
const {login, create} = require('../controllers/UsersController')

router.use('/login', login)
router.use('/register', create)
router.use('/user', userRouter)
router.use('/vendor', vendorRouter)


module.exports = router;
