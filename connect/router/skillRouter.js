const router = require ("express").Router();
var skillController = require ("../controllers/skillController.js");

router.get("/", skillController.getAllSkills)
router.post("/", skillController.postOneSkill)
router.delete("/:id", skillController.deleteSkill)
router.put("/:id", skillController.updateSkill)
router.get("/:userId", skillController.getAllUserSkill)

module.exports = router;
