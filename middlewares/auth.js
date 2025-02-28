const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')

dotenv.config()

const secret = process.env.JWT_SECRET;

const auth = (req, res, next) => {
    const notAuthRequired = ['/', '/login', '/register'];
    if(notAuthRequired.includes(req.url)) return next();
    const { authorization } = req.headers;
    if(!authorization) return res.status(403).send({ message: 'Access Denied', details: [{token: 'Not provided'}]});
    try {
        jwt.verify(auth.split(' ')[1], secret);
    } catch(error) {
        return res.status(403).send({ message: 'Access Denied', details: [{token: 'Invalid'}]});
    }
    return next();
};

module.exports =auth;
