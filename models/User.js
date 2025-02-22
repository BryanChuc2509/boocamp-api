const UserOf = (sequelize, DataTypes) => {
    const User = sequelize.default('User', {
        userId: {
            type: DataTypes.INTEGER,
            primary: true,
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
        email: {
            type: DataTypes.STRING,
            field: 'CORREO',
        },
        password: {
            type: DataTypes.STRING,
            field: 'CONTRASENIA'
        }
    },
        {
            tableName: 'USUARIOS',
            timestamps: false,
        }
    );
    return User;
};

module.exports = UserOf;