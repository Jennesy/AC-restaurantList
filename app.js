const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
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

//start and listen on port
app.listen(port, () => {
  console.log(`Express server is running on http://localhost:${port}`)
})