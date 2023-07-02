const router = require ("express").Router();
var userController = require ("../controllers/userController.js");

router.post("/signup", userController.signup)
router.post("/login", userController.login)
router.post("/verify", userController.verify)


module.exports = router;