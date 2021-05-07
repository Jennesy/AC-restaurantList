const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
const port = 3000
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/restaurant-list', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
const Restaurant = require('./models/restaurant.js')

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

app.get('/', (req, res) => {
  return Restaurant.find()
    .lean()
    .then(restaurants => {
      res.render('index', { restaurants })
    })
    .catch(error => console.log(error))
})

app.get('/restaurants/new', (req, res) => {
  res.render('new')
})

app.post('/restaurants', (req, res) => {
  const name = req.body.name
  const name_en = req.body.name
  const category = (req.body.MiddleEast || '') + ' ' + (req.body.Japanese || '') + ' ' + (req.body.Italian || '') + ' ' + (req.body.American || '') + ' ' + (req.body.Bar || '') + ' ' + (req.body.Cafe || '') + ' ' + (req.body.Other || '')
  const image = req.body.image || 'https://image.freepik.com/free-vector/people-eating-food-court-cafeterias_74855-5284.jpg'
  const location = req.body.location
  const phone = req.body.phone
  const google_map = req.body.google_map || `https://www.google.com.tw/maps/place/${location}`
  const rating = Number(req.body.rating)
  const description = req.body.description
  return Restaurant.create({ name, name_en, category, image, location, phone, google_map, rating, description })
    .then(() => { res.redirect('/') })
    .catch(error => console.log(error))
})

app.get('/restaurants/:id', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .lean()
    .then((restaurant) => res.render('show', { restaurant }))
    .catch(error => console.log(error))
})

app.get('/search', (req, res) => {
  const keyword = req.query.keyword
  Restaurant.find()
    .lean()
    .then(restaurants => res.render('index', {
      restaurants: restaurants.filter(restaurant => {
        const restaurantKeywords = restaurant.name + restaurant.name_en + restaurant.category
        return restaurantKeywords.toLowerCase().includes(keyword.toLowerCase())
      }), keyword: keyword
    }))
    .catch(error => console.log(error))
})

app.post('/restaurants/new', (req, res) => {
  console.log(req.body)
})

//start and listen on port
app.listen(port, () => {
  console.log(`Express server is running on http://localhost:${port}`)
})