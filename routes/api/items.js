const router = require('express').Router()
const itemController = require('../../controllers/itemController')

router.route('/')
  .get(itemController.findAll)
  .post(itemController.create)

router.route('/:id')
  .delete(itemController.remove)

module.exports = router