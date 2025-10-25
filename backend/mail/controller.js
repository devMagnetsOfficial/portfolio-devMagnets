const ejs=require('ejs')
const { contactModel, donateModel, mentorshipModel } = require('./model')
const Sendmail = require('../utilities/email')
const contact = async (req, res) => {
    try {
        const { name, mail, message } = req.body
        await contactModel.create({ name, mail, message })
        const html = await ejs.renderFile('./view/mailTemplate.ejs', { name, form: 'contact', message })
        const mssg = {
            from: process.env.MAIL,
            to: process.env.MAIL,
            subject: 'Contact',
            replyTo: mail,
            html,
          
        }
        const mailresponse = await Sendmail(mssg)
        res.json({ success: true, mailresponse })
    } catch (err) {
        res.json({ err, success: false })
    }
}
const donate = async (req, res) => {
    try {
        const { name, mail, message, phoneNo, amount } = req.body
        await donateModel.create({ name, mail, message, phoneNo, amount })
        res.json({ success: true })
    } catch (err) {
        res.json({ err, success: false })
    }
}
const mentorship = async (req, res) => {
    try {
        const { name, mail, message, phoneNo } = req.body
        await mentorshipModel.create({ name, mail, message, phoneNo })
        res.json({ success: true })
    } catch (err) {
        res.json({ err, success: false })
    }
}
module.exports = { contact, donate, mentorship }