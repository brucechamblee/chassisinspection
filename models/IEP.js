const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const IEPSchema = new Schema({

    IEPname:{
        type: String,
        required: true
    },
    brakestroke: {
        type: Schema.Types.ObjectId,
        ref: "BrakeStroke"
    },
    chassis: {
        type: Schema.Types.ObjectId,
        ref: "Chassis"
    },
    header: {
        type: Schema.Types.ObjectId,
        ref: "Header"
    },
    inspection: {
            type: Schema.Types.ObjectId,
            ref: "Inspection"
    },
    tireinspection: {
        type: Schema.Types.ObjectId,
        ref: "TireInspection"
    }

})

const IEP = mongoose.model("IEP", IEPSchema);

module.exports = IEP;