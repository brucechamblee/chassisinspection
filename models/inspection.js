const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const InspectionSchema = new Schema({
  brakesCheckGood: {
    type: Boolean,
    required: true
  },

  airSysCheckGood: {
    type: Boolean,
    required: true
  },
  suspensionCheckGood: {
    type: Boolean,
    required: true
  },

  couplingCheckGood: {
    type: Boolean,
    required: true
  },

  electricalCheckGood: {
    type: Boolean,
    required: true
  },

  frameCheckGood: {
    type: Boolean,
    required: true
  },

  wheelsCheckGood: {
    type: Boolean,
    required: true
  },

  lubricationCheckGood: {
    type: Boolean,
    required: true
  },

  documentationCheckGood: {
    type: Boolean,
    required: true
  },

  tiresCheckGood: {
    type: Boolean,
    required: true
  },
  brakeComment: {
    type: String
  },
  airSysComment: {
    type: String
  },
  suspensionComment: {
    type: String
  },
  couplingComment: {
    type: String
  },
  electricalComment: {
    type: String
  },
  frameComment: {
    type: String
  },
  wheelsComment: {
    type: String
  },
  lubricationComment: {
    type: String
  },
  documentationComment: {
    type: String
  },
  tiresComment: {
    type: String
  }
});

const Inspection = mongoose.model('Inspection', InspectionSchema);

module.exports = Inspection;
