const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TireInspectionSchema = new Schema({

    lfopsi:{
        type: Number,
        required: true
    },
    lfocapoem: {
        type: Number,
        required: true
    },
    lfo32nds: {
        type: Number,
        required: true
    },
    lfipsi:{
        type: Number,
        required: true
    },
    lficapoem: {
        type: Number,
        required: true
    },
    lfi32nds: {
        type: Number,
        required: true
    },
    rfopsi:{
        type: Number,
        required: true
    },
    rfocapoem: {
        type: Number,
        required: true
    },
    rfo32nds: {
        type: Number,
        required: true
    },
    rfipsi:{
        type: Number,
        required: true
    },
    rficapoem: {
        type: Number,
        required: true
    },
    rfi32nds: {
        type: Number,
        required: true
    },
    lmopsi:{
        type: Number,
        required: true
    },
    lmocapoem: {
        type: Number,
        required: true
    },
    lmo32nds: {
        type: Number,
        required: true
    },
    lmipsi:{
        type: Number,
        required: true
    },
    lmicapoem: {
        type: Number,
        required: true
    },
    lmi32nds: {
        type: Number,
        required: true
    },
    rmopsi:{
        type: Number,
        required: true
    },
    rmocapoem: {
        type: Number,
        required: true
    },
    rmo32nds: {
        type: Number,
        required: true
    },
    rmipsi:{
        type: Number,
        required: true
    },
    rmicapoem: {
        type: Number,
        required: true
    },
    rmi32nds: {
        type: Number,
        required: true
    },
    lropsi:{
        type: Number,
        required: true
    },
    lrocapoem: {
        type: Number,
        required: true
    },
    lro32nds: {
        type: Number,
        required: true
    },
    lripsi:{
        type: Number,
        required: true
    },
    lricapoem: {
        type: Number,
        required: true
    },
    lri32nds: {
        type: Number,
        required: true
    },
    rropsi:{
        type: Number,
        required: true
    },
    rrocapoem: {
        type: Number,
        required: true
    },
    rro32nds: {
        type: Number,
        required: true
    },
    rripsi:{
        type: Number,
        required: true
    },
    rricapoem: {
        type: Number,
        required: true
    },
    rri32nds: {
        type: Number,
        required: true
    }
})

const TireInspection = mongoose.model("TireInspection", TireInspectionSchema);

module.exports = TireInspection;