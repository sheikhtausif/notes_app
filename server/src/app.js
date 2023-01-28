require('dotenv').config()
const express = require('express')
const cors = require('cors');
const path = require('path')
const PORT = process.env.PORT

const connectToMongo = require('./configs/db');
const userController = require('./routes/auth')
const noteController = require('./routes/notes')

const app = express()
app.use(cors())
app.use(express.json())

// Google login
// const passport = require("./configs/passport");

// app.use(passport.initialize());

// passport.serializeUser(function (user, done) {
//     done(null, user);
// });
// passport.deserializeUser(function (user, done) {
//     done(null, user)
// });

app.get("/", function (req, res) {
    res.send("API is running...");
})

// app.get('/auth/google',
//     passport.authenticate('google', {
//         scope:
//             ['email', 'profile']
//     })
// );

// app.get(
//     "/auth/google/callback",
//     passport.authenticate("google", { failureRedirect: "/" }),
//     function (req, res) {
//         return res.status(201).json({ status: "success", user: req.user });
//     }
// );


// ! Routes
app.use('/api/auth', userController)
app.use('/api/notes', noteController)

// this code for production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../../client/build')))

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../../client', 'build', 'index.html'))
    })
}
else {
    app.get('/', (req, res) => {
        res.send('API Running...')
    })
}

app.listen(PORT, () => {
    connectToMongo()
    console.log('connect has been established with atlas')
    console.log(`Notebook App backend listening at http://localhost:${PORT}`)
})