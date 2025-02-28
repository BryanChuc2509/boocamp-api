const CategoryOf = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        categoryId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'IDCATEGORIA',
        },
        category: {
            type: DataTypes.STRING,
            field: 'CATEGORIA',
        },
    },
        {
            tableName: 'CATEGORIAS',
            timestamps: false,
        }
    );
    return Category;
}

module.exports = CategoryOf;