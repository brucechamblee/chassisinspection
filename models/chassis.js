const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ChassisSchema = new Schema({

    chassisNumber:{
        type: Number,
        required: true
    },
    VIN: {
        type: Number,
        required: true
    }

})

const Chassis = mongoose.model("Chassis", ChassisSchema);

module.exports = Chassis;