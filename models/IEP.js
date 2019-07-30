const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const IEPSchema = new Schema({
  IEPname: {
    type: String,
    required: false
  },
  IEPaddressField: {
    type: String,
    required: false
  },

  brakePic: {
    type: String
  },
  airSysPic: {
    type: String
  },
  suspensionPic: {
    type: String
  },
  couplingPic: {
    type: String
  },
  electricalPic: {
    type: String
  },
  framePic: {
    type: String
  },
  wheelPic: {
    type: String
  },
  lubricationPic: {
    type: String
  },
  documentationPic: {
    type: String
  },
  tiresPic: {
    type: String
  },
  brakestroke: {
    type: Schema.Types.ObjectId,
    ref: 'BrakeStroke'
  },
  chassis: {
    type: Schema.Types.ObjectId,
    ref: 'Chassis'
  },
  inspection: {
    type: Schema.Types.ObjectId,
    ref: 'Inspection'
  },
  tireinspection: {
    type: Schema.Types.ObjectId,
    ref: 'TireInspection'
  }
});

const IEP = mongoose.model('IEP', IEPSchema);

module.exports = IEP;
