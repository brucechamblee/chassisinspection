const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const InspectionSchema = new Schema({

    ABS:{
        type: Boolean, 
        required: true
    },
    brakes: {
        type: Boolean,
        required: true,
    },
    brakesdesc:{
        type: String
    },
    airsys:{
        type: Boolean, 
        required: true
    },
    airsysdesc:{
        type: String
    },
    suspensionaxle: {
        type: Boolean,
        required: true,
    },
    suspensionaxledesc:{
        type: String
    },
    couplingsecurement:{
        type: Boolean, 
        required: true
    },
    couplingsecurementdesc:{
        type: String
    },
    electricallightingconsp: {
        type: Boolean,
        required: true,
    },
    electricallightingconspdesc:{
        type: String
    },
    frameslider:{
        type: Boolean, 
        required: true
    },
    framesliderdesc:{
        type: String
    },
    wheelsrims: {
        type: Boolean,
        required: true,
    },
    wheelsrimsdesc:{
        type: String
    },
    lubrication:{
        type: Boolean, 
        required: true
    },
    lubricationdesc:{
        type: String
    },
    documentation: {
        type: Boolean,
        required: true,
    },
    documentationdesc:{
        type: String
    },
    tires:{
        type: Boolean, 
        required: true
    },
    tiresdesc:{
        type: String
    },
    brakeaction: {
        type: Boolean,
        required: true,
    },
    brakeactiondesc:{
        type: String
    },
    inspectorname:{
        type: String,
        required: true
    }  
})

const Inspection = mongoose.model("Inspection", InspectionSchema);

module.exports = Inspection;