const mongoose = require('mongoose')
const contactSchema = new mongoose.Schema({
    name: String,
    mail: String,
    message: String
})
const contactModel = mongoose.model('contactModel', contactSchema)


const donateSchema = new mongoose.Schema({
    name: String,
    mail: String,
    message: String,
    phoneNo: String,
    amount: String,

})
const donateModel = mongoose.model('donateModel', donateSchema)

const mentorshipSchema = new mongoose.Schema({
    name: String,
    mail: String,
    message: String,
    phoneNo: String,
})
const mentorshipModel = mongoose.model('mentorshipModel', mentorshipSchema)

module.exports = { contactModel, donateModel, mentorshipModel }