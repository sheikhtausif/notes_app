require('dotenv').config()
const express = require('express');
const router = express.Router()
const { body, validationResult } = require('express-validator');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const User = require('../models/User')
var fetchUser = require('../middleware/fetchUser');
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY

// Route: 3 -  Create a user POST "/api/auth/createUser", No login required 
router.post('/createUser',
    [
        body('name', "Name can't be less than 4 characters").isLength({ min: 4 }),
        body('email', "Email should be unique").isEmail(),
        body('password', "password is too short min 3 characters").isLength({ min: 3 }),
    ],
    async (req, res) => {
        let success = false;
        // if there are errors , return bad request
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // check user exists with this email
        try {
            let user = await User.findOne({ email: req.params.email });
            if (user) {
                success = false
                return res.status(400).json({ success, error: 'User already exists' })
            }
            const salt = await bcrypt.genSalt(10);
            const securePassword = await bcrypt.hash(req.body.password, salt);
            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: securePassword,
            })
            const data = {
                user: { id: user.id }
            }
            const authToken = jwt.sign(data, JWT_SECRET_KEY)
            success = true
            res.json({ success, authToken })
            // res.json(user)
        }
        catch (error) {
            // console.log(error.message)
            res.status(500).send("error occured")
        }

    })

//Route: 2 - Authenticate a user POST "/api/auth/login", No login required 
router.post('/login',
    [
        body('email', "Enter a valid email").isEmail(),
        body('password', "Enter valid password").exists(),

    ], async (req, res) => {
        // if there are errors , return bad request
        let success = false
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { email, password } = req.body;
        try {
            let user = await User.findOne({ email })
            if (!user) {
                success = false
                return res.status(400).json({ success, error: "please try to login correct credentials" });
            }
            const passwordCompare = await bcrypt.compare(password, user.password)
            if (!passwordCompare) {
                success = false;
                return res.status(400).json({ success, error: "please try to login correct credentials" });
            }
            const data = {
                user: { id: user.id }
            }
            const authToken = jwt.sign(data, JWT_SECRET_KEY)
            success = true;
            const { name } = user
            res.json({ success, authToken, name })
        }
        catch (error) {
            // console.log(error.message)
            res.status(500).send("internal server error");
        }
    })

// Route: 3 -  Login a user POST "/api/auth/getUser", login required 
router.post('/getUser', fetchUser, async (req, res) => {
    try {
        const userId = req.user.id
        const user = await User.findById(userId).select("-password")
        res.send(user)
    }
    catch (error) {
        // console.log(error.message)
        res.status(500).send("internal server error");
    }
})

module.exports = router
