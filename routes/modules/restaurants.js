const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant.js')

const getImage = require('../../models/getDefaultImage.js')
const googleMapURL = 'https://www.google.com.tw/maps/place/'

router.get('/new', (req, res) => {
  res.render('new')
})
router.get('/:id', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .lean()
    .then((restaurant) => res.render('show', { restaurant }))
    .catch(error => console.log(error))
})
router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .lean()
    .then((restaurant) => res.render('edit', { restaurant }))
    .catch(error => console.log(error))
})
router.post('/', (req, res) => {
  const name = req.body.name
  const name_en = req.body.name_en
  const category = req.body.category
  const image = req.body.image || getImage(category)
  const location = req.body.location
  const phone = req.body.phone
  const google_map = req.body.google_map || `${googleMapURL}${location}`
  const rating = Number(req.body.rating)
  const description = req.body.description
  return Restaurant.create({ name, name_en, category, image, location, phone, google_map, rating, description })
    .then(() => { res.redirect('/') })
    .catch(error => console.log(error))
})
router.delete('/:id', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .then(restaurant => restaurant.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})
router.put('/:id', (req, res) => {
  const id = req.params.id
  const name = req.body.name
  const name_en = req.body.name_en
  const category = req.body.category
  const image = req.body.image || getImage(category)
  const location = req.body.location
  const phone = req.body.phone
  const google_map = req.body.google_map || `${googleMapURL}${location}`
  const rating = Number(req.body.rating)
  const description = req.body.description
  return Restaurant.findById(id)
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
    .then(() => res.redirect(`/restaurants/${id}`))
    .catch(error => console.log(error))
})

module.exports = router