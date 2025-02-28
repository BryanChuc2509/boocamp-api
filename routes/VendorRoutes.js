const express = require ('express');
const router = express.Router();
const vendorsController = require('../controllers/VendorsController');

router
    .route('/all')
    .get(vendorsController.getVendors);
router
    .route('/:vendorId')
    .get(vendorsController.getVendorById)
router
    .route('/create')
    .post(vendorsController.create)
router
    .route('/update/:vendorId')
    .put(vendorsController.update)
router
    .route('/delete/:userId')
    .delete(vendorsController.deleteVendor)

module.exports = router;