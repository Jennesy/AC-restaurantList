const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant.js')
const getSortingMethod = require('../../models/getSortingMethod')

router.get('/', (req, res) => {
  const userId = req.user._id
  const sort = req.query.sort || ''
  return Restaurant.find({ userId })
    .lean()
    .sort(getSortingMethod(sort))
    .then(restaurants => {
      res.render('index', { restaurants, sort })
    })
    .catch(error => console.log(error))
})
router.get('/search', (req, res) => {
  const userId = req.user._id
  const keyword = req.query.keyword
  Restaurant.find({ userId })
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