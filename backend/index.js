const connectToMongo = require('./db');
const express = require('express')
const cors = require('cors');
const PORT = process.env.PORT || 5000;

const app = express()
connectToMongo()


app.use(cors())
app.use(express.json())

// ! Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))


app.listen(PORT, () => {
    console.log(`Notebook App backend listening at http://localhost:${PORT}`)
})
