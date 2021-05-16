const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant.js')
const getSortingMethod = require('../../models/getSortingMethod')

router.get('/', (req, res) => {
  const sort = req.query.sort || ''
  return Restaurant.find()
    .lean()
    .sort(getSortingMethod(sort))
    .then(restaurants => {
      res.render('index', { restaurants, sort})
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