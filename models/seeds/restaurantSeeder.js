if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const Restaurant = require('../restaurant.js')
const User = require('../user')
const restaurantList = require('../../restaurant.json').results
const db = require('../../config/mongoose')
const bcrypt = require('bcryptjs')
const SEED_USERS = [{
  email: 'user1@example.com',
  password: '12345678',
  restaurants: restaurantList.slice(0, 4)
}, {
  email: 'user2@example.com',
  password: '12345678',
  restaurants: restaurantList.slice(4, 8)
}]
db.once('open', () => {
  return Promise.all(SEED_USERS.map(async (SEED_USER) => {
    const { email, password, restaurants } = SEED_USER
    await bcrypt
      .genSalt(10)
      .then(salt => { return bcrypt.hash(password, salt) })
      .then(hash => { return User.create({ email, password: hash }) })
      .then(user => {
        return Promise.all(restaurants.map(restaurant => {
          const { name, name_en, category, image, location, phone, google_map, rating, description } = restaurant
          const userId = user._id
          return Restaurant.create({ name, name_en, category, image, location, phone, google_map, rating, description, userId })
        }))
      })

  })).then(() => {
    console.log('done!')
    process.exit()
  })
})
