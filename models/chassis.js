const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ChassisSchema = new Schema({
  unitNumber: {
    type: String,
    required: false
  },
  serialNumber: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now,
    required: false
  },
  license: {
    type: String,
    required: false
  },
  licensestate: {
    type: String,
    required: false
  },
  licenseExp: {
    type: String
  },
  unitType: {
    type: String,
    required: false
  }
});

const Chassis = mongoose.model('Chassis', ChassisSchema);

module.exports = Chassis;
