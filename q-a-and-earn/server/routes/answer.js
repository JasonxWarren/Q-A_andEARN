const router = require('express').Router();
const {answer} = require('../controllers')
const authRequired = require ('../middleware/auth.required')

router.get('/', authRequired, answer.index);
router.get('/myanswers', authRequired, answer.indexUser);
router.post('/', authRequired, answer.create);
module.exports = router;