const express = require('express');
const router = express.Router();

const skillController = require('../controllers/skills')

// GET /skills
router.get('/', skillController.index);
// GET /skills/:id
router.get('/:id', skillController.show);

// All actual paths start with "/skills"

module.exports = router;
