const mongoose = require('mongoose');

//create Contact schema
const ContactSchema = mongoose.Schema({
    Name: String,
    email: String,
    phone: Number,
    message: String
});

const ContactModel = mongoose.model("contact", ContactSchema);

module.exports = ContactModel;