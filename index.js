require('dotenv').config()
const express = require('express')
const routes = require('./protocol/routes')

const app = express()
app.use(express.json())
app.use(routes)

app.listen(8080, () => console.log('Servidor MCP no ar 🚀'))
