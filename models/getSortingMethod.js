function getSortingMethod(sort) {
  switch (sort) {
    case 'asc':
      return { name: 'asc' }
    case 'desc':
      return { name: 'desc' }
    case 'category':
      return { category: 'asc' }
    case 'location':
      return { location: 'asc' }
    case 'rating':
      return { rating: 'desc' }
    default:
      return { _id: 'asc' }
  }
}

module.exports = getSortingMethod