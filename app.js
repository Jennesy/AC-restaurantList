const express = require('express')
const exphbs = require('express-handlebars')
const hbshelpers = require('handlebars-helpers');
const multihelpers = hbshelpers();
const routes = require('./routes')
const methodOverride = require('method-override')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const session = require('express-session')
const usePassport = require('./config/passport')
require('./config/mongoose')
const app = express()
const port = 3000

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}))
usePassport(app)

//set template engine
app.engine('handlebars', exphbs({
  helpers: multihelpers,
  defaultLayout: "main"
}))
app.set('view engine', 'handlebars')

//routes setting
app.use(express.static('public'))
app.use(routes)

//start and listen on port
app.listen(port, () => {
  console.log(`Express server is running on http://localhost:${port}`)
})