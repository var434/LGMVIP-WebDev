const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types;

//create Registration schema
const RegistrationsSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: Number,
    password: String,
    address: String,
    Roll: Number,
    semester: Number,
    postedBy:{
        type:ObjectId,
        ref:"registrations"
     }
});

const RegistrationsModel = mongoose.model("registrations", RegistrationsSchema);

module.exports = RegistrationsModel;