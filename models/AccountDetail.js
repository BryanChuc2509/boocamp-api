const AccountDetailsOf = (sequelize, DataTypes) => {
    const AccountDetails = sequelize.define('AccountDetails', {
        accountId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'ID',
        },
        description: {
            type: DataTypes.STRING,
            field: 'DESCRIPCION',
        },
        charge: {
            type: DataTypes.STRING,
            field: 'CARGO',
        },
        balance: {
            type: DataTypes.STRING,
            field: 'SALDO',
        },
        dateHour: {
            type: DataTypes.DATE,
            field: 'FECHACHORA',
        },
        accountId: {
            type: DataTypes.INTEGER,
            field: 'IDCUENTA',
            foreignKey: true,
        },
        categoryId: {
            type: DataTypes.INTEGER,
            field: 'IDCATEGORIA',
            foreignKey: true,
        },
        clientId: {
            type: DataTypes.INTEGER,
            field: 'IDCLIENTE',
            foreignKey: true,
        },
        vendorId: {
            type: DataTypes.INTEGER,
            field: 'IDPROVEEDOR',
            foreignKey: true,
        },
        userId: {
            type: DataTypes.INTEGER,
            field: 'IDUSER',
            foreignKey: true,
        },
    },
        {
            tableName: 'CUENTAS_DETALLE',
            timestamps: false,
        }
    );
    return AccountDetails;
}

module.exports = AccountDetailsOf;