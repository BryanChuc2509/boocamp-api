const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { User } = require('../models')()

dotenv.config()

const secret = process.env.JWT_SECRET;

// const login = async (req, res) => {

// }

const getUsers = async (__req, res) => {
    try {
        const users = await User.findAll();
        return res.send(users);
    }catch(error){
        console.log(error);
        return res.status(500).send({message: 'Error al obtener los usuarios'})
    }
}

const getUserById = async (userId) => {
    try {
        const user = await User.findOne({
            where: {
                userId,
            }
        })
        return res.send(user)
    }catch(error){
        console.log(error);
        return null;
    }
}

// const create = async (req, res) => {
//     try {
//         const user = await User.create(req.body);
//         return res.send({message:  'Usuario creado existosamente', data: user });
//     } catch(error) {
//         return res.status(500).json({message: 'Error al crear el usuario'});
//     }
// }


// const update = async (req, res) => {
//     try {
//         const {userId} = req.params;
//         const userUpdated = await User.update(req.body, {
//             where: { id },
//         })

//         if(!userUpdated) {
//             return res.status(404).json({message: 'Error al encontrar el usuario'});
//         }

//         return res.send({message:  'Usuario actualizado existosamente', data: User });
//     } catch(error) {
//         return res.status(500).send({message: 'Error al crear el usuario'});
//     }
// }

module.exports = {
    // login,
    getUsers,
    getUserById,
    // create,
    // update,
};