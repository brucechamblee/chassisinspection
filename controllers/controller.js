const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.IEP.find(req.query)
      .then(iep => res.json(iep))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.IEP.findById(req.params.id)
      .then(iep => res.json(iep))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.IEP.create(req.body)
      .then(iep => res.json(iep))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.IEP.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(iep => res.json(iep))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.IEP.findById({ _id: req.params.id })
      .then(iep => iep.remove())
      .then(iep => res.json(iep))
      .catch(err => res.status(422).json(err));
  }
};