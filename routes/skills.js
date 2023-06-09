const express = require('express')
const router = express.Router()

const skillController = require('../controllers/skills')

// GET /skills
router.get('/', skillController.index)
// GET /skills/new
router.get('/new', skillController.newSkill)
// GET /skills/:id
router.get('/:id', skillController.show)
// GET /skills/new <-- this new route cannot stay here! 

// POST /skills
router.post('/', skillController.create)
// All actual paths start with "/skills"

router.delete('/:id', skillController.deleteSkill)

module.exports = router
