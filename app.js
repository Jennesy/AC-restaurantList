const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const restaurantList = require('./restaurant.json')
const port = 3002

//set template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//routes setting
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.render('index', { restaurantList: restaurantList.results })
})
app.get('/restaurants/:id', (req, res) => {
  const restaurant = restaurantList.results.find(restaurant =>
    restaurant.id.toString() === req.params.id
  )
  console.log(restaurant)
  res.render('show', {
    restaurant: restaurant
  })
})
app.get('/search', (req, res) => {
  const keyword = req.query.keyword
  console.log(restaurantList.results.filter(restaurant => {
    const restaurantKeywords = restaurant.name + restaurant.name_en + restaurant.category
    return restaurantKeywords.toLowerCase().includes(keyword.toLowerCase())
  }))
  res.render('index', {
    restaurantList: restaurantList.results.filter(restaurant => {
      const restaurantKeywords = restaurant.name + restaurant.name_en + restaurant.category
      return restaurantKeywords.toLowerCase().includes(keyword.toLowerCase())
    }), keyword: keyword
  })

})

//start and listen on port
app.listen(port, () => {
  console.log(`Express server is running on http://localhost:${port}`)
})