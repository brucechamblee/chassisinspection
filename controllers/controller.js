const { IEP, Chassis, Inspection } = require('../models');

module.exports = {
  findAll: function(req, res) {
    IEP.find({})
      .populate('chassis')
      .populate('inspection')
      .then(iep => res.json(iep))
      .catch(err => res.status(422).json(err));
  },
  findbyName: function(req, res) {
    IEP.find({ IEPname: { $regex: req.params.query, $options: 'i' } }, function(
      err,
      docs
    ) {})
      .populate('chassis')
      .populate('inspection')
      .then(iep => res.json(iep))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    IEP.findById(req.params.id)
      .populate('chassis')
      .populate('inspection')
      .then(iep => res.json(iep))
      .catch(err => res.status(422).json(err));
  },
  create: async function(req, res) {
    let chassisObj = await Chassis.create(req.body.chassis);
    req.body.chassis = chassisObj._id;
    let inspectionObj = await Inspection.create(req.body.inspection);
    req.body.inspection = inspectionObj._id;
    IEP.create(req.body)
      .then(IEPData => res.json(IEPData))
      .catch(err => res.status(422).json(err));
  }
  // update: function(req, res) {
  //   db.IEP.findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(iep => res.json(iep))
  //     .catch(err => res.status(422).json(err));
  // },
  // remove: function(req, res) {
  //   db.IEP.findById({ _id: req.params.id })
  //     .then(iep => iep.remove())
  //     .then(iep => res.json(iep))
  //     .catch(err => res.status(422).json(err));
  // }
};
