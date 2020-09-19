const express = require('express')
const http = require('http')
const path = require('path')
const videosRouter = require('./routers/videos')

const app = express()
const port = process.env.PORT || 3000
const publicDir = path.join(__dirname, '/../public')

app.use(express.json())
app.use(videosRouter)
app.use(express.static(publicDir))

app.listen(port, () => {
    console.log('Listening on port ' + port)
})