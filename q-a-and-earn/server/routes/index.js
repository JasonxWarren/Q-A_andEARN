const router = require('express').Router();

router.use('/user', require('./user'));
router.use('/question', require("./question"));
router.use("/auth", require("./auth"));
router.use("/answer",require("./answer"));
module.exports = router;