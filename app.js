const express = require('express')
const exphbs = require('express-handlebars')
const routes = require('./routes')
const methodOverride = require('method-override')
const app = express()
const port = 3000

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/restaurant-list', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection


// check mongodb
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
})

//set template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//routes setting
app.use(express.static('public'))
app.use(routes)

//start and listen on port
app.listen(port, () => {
  console.log(`Express server is running on http://localhost:${port}`)
})