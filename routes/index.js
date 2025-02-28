const express = require ('express');
const router = express.Router();
const vendorRouter = require('./VendorRoutes');
const userRouter = require('./UserRoutes');
const clientRouter = require('./ClientRoutes')
const {login, register} = require('../controllers/UsersController')

router.use('/login', login)
router.use('/register', register)
router.use('/user', userRouter)
router.use('/vendor', vendorRouter)
router.use('/client', clientRouter)


module.exports = router;
