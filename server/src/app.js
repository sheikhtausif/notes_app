const express = require('express')
const cors = require('cors');
const PORT = process.env.PORT || 5000;

const connectToMongo = require('./configs/db');
const userController = require('./routes/auth')
const noteController = require('./routes/notes')

const app = express()

app.use(cors())
app.use(express.json())

// ! Routes
app.use('/api/auth', userController)
app.use('/api/notes', noteController)


app.listen(PORT, async () => {
    await connectToMongo()
    console.log('connect has been established with atlas')
    console.log(`Notebook App backend listening at http://localhost:${PORT}`)
})
