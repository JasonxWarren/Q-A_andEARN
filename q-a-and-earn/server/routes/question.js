const router = require('express').Router();
const {question} = require('../controllers')
const authRequired = require ('../middleware/auth.required')

router.get('/', authRequired, question.index);
router.post("/", authRequired, question.create);
module.exports = router;