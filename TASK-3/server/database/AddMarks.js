const mongoose = require('mongoose');


//create AddMarks schema
const AddMarksSchema = mongoose.Schema({
    Roll: String,
    email: String,
    subject1: Number,
    subject2: Number,
    subject3: Number,
    subject4: Number,
    subject5: Number,
    subject6: Number
});

const AddMarksModel = mongoose.model("addMarks", AddMarksSchema);

module.exports = AddMarksModel;