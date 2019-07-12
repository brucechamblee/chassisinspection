const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BrakeStrokeSchema = new Schema({

    lfstroke:{
        type: Number,
        required: true
    },
    rfstroke:{
        type: Number,
        required: true
    },
    lmstroke:{
        type: Number,
        required: true
    },
    rmstroke:{
        type: Number,
        required: true
    },
    lrstroke:{
        type: Number,
        required: true
    },
    rrstroke:{
        type: Number,
        required: true
    }
})

const BrakeStroke = mongoose.model("BrakeStroke", BrakeStrokeSchema);

module.exports = BrakeStroke;