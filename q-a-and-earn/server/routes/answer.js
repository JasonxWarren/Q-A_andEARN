const router = require('express').Router();
const {answer} = require('../controllers')
const authRequired = require ('../middleware/auth.required')

router.get('/', authRequired, answer.index);
router.post('/', authRequired, answer.create);
module.exports = router;