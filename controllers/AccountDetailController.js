const { AccountDetail } = require('../models');

const getAccounts = async (_req, res) => {
    try {
        const accounts = await AccountDetail.findAll();
        return res.send(accounts);
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: 'Unexpected error' });
    }
}

const getAccountById = async (req, res) => {
    try {
        const { accountId } = req.params;
        const account = await
            AccountDetail.findOne({
                where: {
                    accountId: accountId,
                },
            })
        if (!account) {
            return res.status(404).send({ message: 'Account not found' });
        }
        return res.send({ message: 'Account found', data: account });
    }
    catch (error) {
        console.error(error);
        return res.status(500).send({ message: 'Unexpected error' });
    }
}

const create = async (req, res) => {
    try {
        const account = await AccountDetail.create(req.body);
        return res.send({ message: 'Account created', data: account });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: 'Unexpected error' });
    }
}

const update = async (req, res) => {
    try {
        const { accountId } = req.params;
        const account = await getAccountById(accountId);
        if (!account) {
            return res.status(404).send({ message: 'Account not found' });
        }
        const updateAccount = await AccountDetail.update(req.body, {
            where: {
                accountId: accountId,
            }
        })
        return res.send({ message: 'Account updated', data: updateAccount })
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: 'Unexpected error' });
    }
}

const deleteAccount = async (req, res) => {
    try {
        const { accountId } = req.params;
        const account = await getAccountById(accountId);
        if (!account) {
            return res.status(404).send({ message: 'Account not found' })
        }
        await AccountDetail.destroy({
            where: {
                accountId: accountId,
            }
        })
        return res.send({ message: 'Account deleted' })
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: 'Unexpected error' });
    }
}

module.exports = {
    getAccounts,
    getAccountById,
    create,
    update,
    deleteAccount
}