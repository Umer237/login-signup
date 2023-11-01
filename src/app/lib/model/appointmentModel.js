const { default: mongoose } = require("mongoose");

const AppModel = new mongoose.Schema({
    FirstName: String,
    LastName: String,
    ContactNumber: String,
    Email: String,
    Procedure: String,
    selectedDate: String,
    Time: String,
    Doctor: String,
    Message: String,
    
    
});

export const AppointModel = mongoose.models.appointments || mongoose.model('appointments',AppModel);