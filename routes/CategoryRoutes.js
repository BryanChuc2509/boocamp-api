const router = express.Router();
const categoryController = require('../controllers/CategoryController');
const express = require('express');

router
    .route('/all')
    .get(categoryController.getCategories);
router
    .route('/:categoryId')
    .get(categoryController.getCategoryById);
router
    .route('/create')
    .post(categoryController.create);
router
    .route('/update/:categoryId')
    .put(categoryController.update);
router
    .route('/delete/:categoryId')
    .delete(categoryController.deleteCategory);

module.exports = router;