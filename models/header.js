const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const HeaderSchema = new Schema({

    date:{
        type: Date, 
        default: Date.now,
        required: true
    },
    license: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true
    },
    licenseexp: {
        type: String,
    },
    sizetype: {
        type: String,
        required: true
    }
})

const Header = mongoose.model("Header", HeaderSchema);

module.exports = Header;