// controllers/skills.js

// Convention is to name the model in uppercase and singular
const Skill = require('../models/skill');


function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll(),
      title: 'All Skills'
    });
  }

  function show(req, res) {
    res.render('skills/show', {
      skill: Skill.getOne(req.params.id),
      title: 'Skill Details'
    });
  }

  function newSkill(req, res) {
    res.render('skills/new', { title: 'New Skill' })
  }

  function create(req, res) {
    console.log(req.body)
    //the model is responsible for creating data
    // Skill.create(req.body);
    // Do a redirect anytime data is changed
    Skill.create(req.body)
    res.redirect('/skills')
  }
  
  function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id)
    res.redirect('/skills')
    console.log(req.params.id, 'deletSkill')
  }

  module.exports = {
    index, 
    show,
    newSkill,
    create,
    deleteSkill
  }
  
 