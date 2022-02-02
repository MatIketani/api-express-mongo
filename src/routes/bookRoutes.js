const router = require('express').Router()
const controller = require('../controllers/bookController')

router.post('/create', controller.createRoute)

router.get('/', controller.getRoute)

router.delete('/delete', controller.deleteRoute)

router.post('/delete/:id', controller.updateRoute)

module.exports = app => app.use('/book', router)