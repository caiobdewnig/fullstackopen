require('dotenv').config();
const express = require('express');
const app = express()
const cors = require('cors')


app.use(cors())
app.use(express.json())

app.get('/', (request, response) => {
    response.send('<h1>Hello World</h1><p>oiiiiii</p>')
})

const PORT = process.env.PORT || 1234
app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`)
})