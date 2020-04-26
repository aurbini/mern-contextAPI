const router = require('express').Router()
const itemsRoute = require('./items')

router.use("/items", itemsRoute)

module.exports = router