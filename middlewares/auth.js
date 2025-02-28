const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')

dotenv.config()

const secret = process.env.JWT_SECRET;

const auth = (req, res, next) => {
    const notAuthRequired = ['/', '/login', '/register'];
    if(notAuthRequired.includes(req.url)) return next();
    const auth = req.headers;
    if(!auth) return res.status(403)
}
