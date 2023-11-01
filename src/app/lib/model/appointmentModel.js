const { default: mongoose } = require("mongoose");

const AppModel = new mongoose.Schema({
    Name: String,
    Phone: String,
    Date: String,
    Message: String
});

export const AppointModel = mongoose.models.appointments || mongoose.model('appointments',AppModel);