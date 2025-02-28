
const ClientOf = (sequelize, DataTypes) => {
    const Client = sequelize.define('Client', {
        clientId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'IDCLIENTE',
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
            tableName: 'CLIENTES',
            timestamps: false,
        }
    );
    return Client;
}

module.exports = ClientOf;