// controllers/skills.js

// Convention is to name the model in uppercase and singular
const Skill = require('../models/skill');

module.exports = {
    index, 
    show,
    new: newSkill
  };

function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll()
    });
  }

  function show(req, res) {
    res.render('skills/show', {
      todo: Skill.getOne(req.params.id),
    });
  }

  function newSkill(req, res) {
    res.render('skills/new', { title: 'New Skill' });
  }

  function create(req, res) {
    console.log(req.body);
    //the model is responsible for creating data
    // Skill.create(req.body);
    // Do a redirect anytime data is changed
    res.redirect('/skills');
  }
  
 