const express = require('express')
const app = express()
const ejs = require('ejs')
const expreeLayout = require('express-ejs-layouts')
const path = require('path')

const PORT = process.env.PORT || 3000

app.get('/', (req,res) => {
    res.send('Hello start express server')
})


//set template engine
app.use(expreeLayout)
app.use('views', path.join(__dirname, '/resources/views'))

app.listen(PORT, () => {
   console.log(`Listening on port ${PORT}`); 
})