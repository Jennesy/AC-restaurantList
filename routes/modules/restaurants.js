const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant.js')

const getImage = require('../../models/getDefaultImage.js')
const googleMapURL = 'https://www.google.com.tw/maps/place/'

router.get('/new', (req, res) => {
  res.render('new')
})
router.get('/:id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  return Restaurant.findOne({ _id, userId })
    .lean()
    .then((restaurant) => res.render('show', { restaurant }))
    .catch(error => console.log(error))
})
router.get('/:id/edit', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  return Restaurant.findOne({ _id, userId })
    .lean()
    .then((restaurant) => res.render('edit', { restaurant }))
    .catch(error => console.log(error))
})
router.post('/', (req, res) => {
  const userId = req.user._id
  const { name, name_en, category, location, phone, description } = req.body
  const image = req.body.image || getImage(category)
  const google_map = req.body.google_map || `${googleMapURL}${location}`
  const rating = Number(req.body.rating)
  return Restaurant.create({ name, name_en, category, image, location, phone, google_map, rating, description, userId })
    .then(() => { res.redirect('/') })
    .catch(error => console.log(error))
})
router.delete('/:id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  return Restaurant.findOne({ _id, userId })
    .then(restaurant => restaurant.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})
router.put('/:id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  const { name, name_en, category, location, phone, description } = req.body
  const image = req.body.image || getImage(category)
  const google_map = req.body.google_map || `${googleMapURL}${location}`
  const rating = Number(req.body.rating)
  return Restaurant.findOne({ _id, userId })
    .then(restaurant => {
      restaurant.name = name
      restaurant.name_en = name_en
      restaurant.category = category
      restaurant.image = image
      restaurant.location = location
      restaurant.phone = phone
      restaurant.google_map = google_map
      restaurant.rating = rating
      restaurant.description = description
      return restaurant.save()
    })
    .then(() => res.redirect(`/restaurants/${_id}`))
    .catch(error => console.log(error))
})

module.exports = router