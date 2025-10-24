// mail code
const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MAIL,
        pass: process.env.MAIL_PASSWORD
    }
})
const sendEmail = async (message) => {

    const info = await transporter.sendMail(message)
    return info.response;
}
module.exports = sendEmail

