const VendorOf = (sequelize, DataTypes) => {
    const Vendor = sequelize.define('Vendor', {
        vendorId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'ID',
        },
        name: {
            type: DataTypes.STRING,
            field: 'NOMBRE',
        },
        lastName: {
            type: DataTypes.STRING,
            field: 'APELLIDOS'
        },
    },
        {
            tableName: 'PROVEEDORES',
            timestamps: false,
        }
    );
    return Vendor;
};

module.exports = VendorOf;