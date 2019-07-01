const router = require('express').Router()
const apiController = require('../controllers/api/index')

router.post('/delete/count', apiController.countController.deleteCount)
router.post('/count', apiController.countController.addCount)
router.get('/counts', apiController.countController.getCounts)
router.get('/count', apiController.countController.getCount)
router.put('/count', apiController.countController.updateCount)

module.exports = router