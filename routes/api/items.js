const router = require('express').Router()
const itemsController = require('../../controllers/')
router
    .route('/')
    .get(itemsController.Items.findAllTodos)
    .post(itemsController.Items.createTODO)

router
    .route('/:id')
    .get(itemsController.Items.findTODO)
    .put(itemsController.Items.updateTODO)
    .delete(itemsController.Items.removeTODO)

module.exports = router
