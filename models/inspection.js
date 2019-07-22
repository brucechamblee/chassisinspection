const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const InspectionSchema = new Schema({
  brakesCheckGood: {
    type: Boolean,
    required: false
  },

  airSysCheckGood: {
    type: Boolean,
    required: false
  },
  suspensionCheckGood: {
    type: Boolean,
    required: false
  },

  couplingCheckGood: {
    type: Boolean,
    required: false
  },

  electricalCheckGood: {
    type: Boolean,
    required: false
  },

  frameCheckGood: {
    type: Boolean,
    required: false
  },

  wheelsCheckGood: {
    type: Boolean,
    required: false
  },

  lubricationCheckGood: {
    type: Boolean,
    required: false
  },

  documentationCheckGood: {
    type: Boolean,
    required: false
  },

  tiresCheckGood: {
    type: Boolean,
    required: false
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
