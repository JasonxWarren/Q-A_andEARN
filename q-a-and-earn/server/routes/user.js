const router = require("express").Router()
const {user} = require("../controllers")
const authRequired = require("../middleware/auth.required")

//routes 
router.get("/", authRequired, user.show)
router.get("/:id", authRequired, user.show)

module.exports = router;