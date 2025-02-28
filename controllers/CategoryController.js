const { Category } = require('../models');

const getCategories = async (_req, res) => {
    try {
        const categories = await Category.findAll();
        return res.send(categories);
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: 'Unexpected error' })
    }
}

const getAccountById = async (req, res) => {
    try {
        const { categoryId } = req.params;
        const category = await Category.findOne({
            where: {
                categoryId: categoryId
            }
        })
        if (!category) {
            return res.status(404).send({ message: 'Category not found' });
        }
        return res.send({ message: 'Category found', data: category });
    }
    catch (error) {
        console.error(error);
        return res.status(500).send({ message: 'Unexpected error' });
    }
}

const create = async (req, res) => {
    try {
        const category = await Category.create(req.body);
        return res.send({ message: 'Category created', data: category });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: 'Unexpected error' });
    }
}

const update = async (req, res) => {
    try {
        const { categoryId } = req.params;
        const category = await getAccountById(categoryId);
        if (!category) {
            return res.status(404).send({ message: 'Category not found' });
        }
        const updateCategory = await Category.update(req.body, {
            where: {
                categoryId: categoryId
            }
        })
        return res.send({ message: 'Category updated', data: updateCategory });
    }catch(error){
        console.error(error);
        return res.status(500).send({message: 'Unexpected error'});
    }
}

const deleteCategory = async (req, res) => {
    try {
        const { categoryId } = req.params;
        const category = await getAccountById(categoryId);
        if (!category) {
            return res.status(404).send({ message: 'Category not found' });
        }
        await Category.destroy({
            where: {
                categoryId: categoryId
            }
        });
        return res.send({ message: 'Category deleted' });
    }
    catch (error) {
        console.error(error);
        return res.status(500).send({ message: 'Unexpected error' });
    }
}

module.exports = {
    getCategories,
    getAccountById,
    create,
    update,
    deleteCategory
}