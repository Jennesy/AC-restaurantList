const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant.js')

router.get('/', (req, res) => {
  return Restaurant.find()
    .lean()
    .then(restaurants => {
      res.render('index', { restaurants })
    })
    .catch(error => console.log(error))
})
router.get('/search', (req, res) => {
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

module.exports = router