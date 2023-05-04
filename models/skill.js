const skills = [
    {id: 125223, skill: 'Playing a Hammond B-3 Organ', done: true},
    {id: 127904, skill: 'Playing slide guitar on a Gibson SG', done: true},
    {id: 139608, skill: 'Doing the dishes', done: false}
  ];
  
  
  
  // READ - Index get all of a data (skills)
  function getAll() {
    return skills
  }

  //READ - Show get 1 object based on the `id`
  function getOne(id) {
    // URL params are strings - convert to a number
    id = parseInt(id)
    // The Array.prototype.find iterator method is
    // ideal for finding objects within an array
    return skills.find(skill => skill.id === id)
  }

  function create(skill) {
    // add the id
    skill.id = Date.now() % 1000000
    // new skills wouldn't be done :) 
    skill.done = false;
    skills.push(skill)
  }

  function deleteOne(id) {
    id = parseInt(id)

    const idx = skills.findIndex(skill => skill.id === id)
    skills.splice(idx, 1)
  }

  console.log('llllll')

  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };