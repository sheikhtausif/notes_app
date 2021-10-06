require('dotenv').config()
var jwt = require('jsonwebtoken');
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY


const fetchUser = (req, res, next) => {
    const token = req.header('auth-token')
    if (!token) {
        res.status(401).send({ error: 'invalid token' })
    }
    try {
        const data = jwt.verify(token, JWT_SECRET_KEY)
        req.user = data.user
        next()
    } catch (error) {
        res.status(401).send({ error: 'invalid token' })
    }
}

module.exports = fetchUser
