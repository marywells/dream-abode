const router = require('express').Router();
const controller = require('./controller');

router.get('/properties', controller.getAll);
router.post('/properties', controller.postOne);
router.patch('/properties/:id', controller.updateOne);

module.exports = router;
