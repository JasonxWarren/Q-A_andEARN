const router = require("express").Router()
const {user} = require("../controllers")
const authRequired = require("../middleware/auth.required")

//routes 
router.get("/",  user.index)
router.get("/:id", user.show)

module.exports = router;