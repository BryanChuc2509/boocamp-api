const express = require ('express');
const router = express.Router();
const vendorRouter = require('./VendorRoutes');
const userRouter = require('./UserRoutes');

router.use('/user', userRouter)
router.use('/vendor', vendorRouter)

module.exports = router;
