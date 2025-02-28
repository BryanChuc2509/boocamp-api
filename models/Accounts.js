const AccountOf = (sequelize, DataTypes) => {
    const Account = sequelize.define('Account', {
        accountId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'ID',
        },
        account: {
            type: DataTypes.STRING,
            field: 'CATEGORIA',
        },
        initialBalance: {
            type: DataTypes.STRING,
            field: 'SALDOINICIAL',
        },
        balance: {
            type: DataTypes.STRING,
            field: 'SALDO',
        },
    },
        {
            tableName: 'CUENTAS',
            timestamps: false,
        }
    );
    return Account;
}

module.exports = AccountOf;