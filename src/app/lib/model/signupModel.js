import mongoose from "mongoose";
var uniqueValidator = require('mongoose-unique-validator')


const mModel = new mongoose.Schema({
    Email: {type: String, require:true, unique:true },
    Password: String,
    Department: String
});

mModel.plugin(uniqueValidator);

export const myModel= mongoose.models.mycollections || mongoose.model('mycollections', mModel)