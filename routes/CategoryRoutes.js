const router = express.Router();
const categoryController = require('../controllers/CategoryController');
const express = require('express');

router
    .router('/all')
    .get(categoryController.getCategories);
router
    .router('/:categoryId')
    .get(categoryController.getCategoryById);
router
    .router('/create')
    .post(categoryController.create);
router
    .router('/update/:categoryId')
    .put(categoryController.update);
router
    .router('/delete/:categoryId')
    .delete(categoryController.deleteCategory);

module.exports = router;