const db = require('../models')

module.exports = { 
  findAll: function(req, res){
    db.Item
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  create: function(req, res){
    db.Item
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function({ params: { id }}, res){
    db.Item
      .deleteOne({_id: id})
      .then(dbModel => res.json({ success: true }))
      .catch(err => res.status(404).json({ success:false }))
  }
}