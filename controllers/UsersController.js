const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { USE } = require('sequelize/lib/index-hints');
const { User } = require('../models')()

dotenv.config()

const secret = process.env.JWT_SECRET;

// const login = async (req, res) => {

// }

const getUsers = async (__req, res) => {
    try {
        const users = await User.findAll();
        return res.send(users);
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: 'Error al obtener los usuarios' })
    }
}

const getUserById = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await User.findOne({
            where: {
                userId: userId,
            }
        })
        if(!user) {
            return res.status(404).json({message: 'Error al encontrar el usuario'});
        }
        return res.send(user)
    } catch (error) {
        console.log(error);
        return null;
    }
}

const create = async (req, res) => {
    try {
        const user = await User.create(req.body);
        return res.send({ message: 'Usuario creado existosamente', data: user });
    } catch (error) {
        return res.status(500).json({ message: 'Error al crear el usuario' });
    }
}


const update = async (req, res) => {
    try {
        const { userId } = req.params;

        const user = await User.findOne({ where: { userId: userId } })
        if (!user) {
            return res.status(404).json({ message: 'Error al encontrar el usuario' });
        }
        const userUpdated = await User.update(req.body, {
            where: { userId: userId },
        })
        return res.send({ message: 'Usuario actualizado existosamente', data: userUpdated });
    } catch (error) {
        return res.status(500).send({ message: 'Error al crear el usuario' });
    }
}

const deleteUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await User.findOne({ where: { userId: userId } })

        if (!user) {
            return res.status(404).json({ message: 'Error al encontrar el usuario' });
        }
        await User.destroy({where: {userId: userId}})
        return res.status(201).send({message: 'Usuario eliminado'})

    } catch (error) {
        return res.status(500).send({ message: 'Error al eliminar el usuario' });
    }
}

module.exports = {
    // login,
    getUsers,
    getUserById,
    create,
    update,
    deleteUser
};