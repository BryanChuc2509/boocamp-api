const { Client } = require('../models')()

const getClients = async(_req, res) => {
    try {
        const clients = await Client.findAll();
        return res.send(clients);
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: 'Error al obtener los clientes' })
    }
}

const getClientById = async (req, res) => {
    try {
        const {clientId} = req.params;
        const client = await Client.findOne({
            where: {
                clientId: clientId,
            },
        })
        if(!client){
            return res.status(404).send({message: 'Client not found'});
        }
        return res.send({ message: 'Client found', data: Client });
    } catch (error) {
        console.error(error);
        return res.status(500).send({message: 'Unexpected error'});
    }
}

const create = async (req, res) => {
    try {
        const client = await Client.create(req.body);
        return res.send({ message: 'Client created', data: client });
    } catch(error) {
        console.error(error);
        return res.status(500).send({message: 'Unexpected error'});
    }
}

const update = async(req, res) => {
    try{

    } catch(error) {
        console.error(error);
        return res.status(500).send({message: 'Unexpected error'});
    }
}

const deleteClient = async(req,res) => {
    try {

    } catch(error) {
        console.error(error);
        return res.status(500).send({message: 'Unexpected error'});
    }
}


module.exports = {
    getClients,
    getClientById,
    create,
    update,
    deleteClient,
}