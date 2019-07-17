const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ChassisSchema = new Schema({

    unitNumber:{
        type: String,
        required: false
    },
    serialNumber: {
        type: String,
        required: false
    },
    date:{
        type: Date, 
        default: Date.now,
        required: true
    },
    license: {
        type: String,
        required: true,
    },
    licensestate: {
        type: String,
        required: true
    },
    licenseExp: {
        type: String,
    },
    unitType: {
        type: String,
        required: true
    },
    brakesGood: {
        type: Boolean
    }

})

const Chassis = mongoose.model("Chassis", ChassisSchema);

module.exports = Chassis;