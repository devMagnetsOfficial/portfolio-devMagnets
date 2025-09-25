const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config({})
app.use(express.json())
app.use(cors())
const nodemailer = require('nodemailer')
app.get('/', (req, res) => {
    res.send('server is running buddy ')
})
app.post('/sendMail', (req, res) => {
    console.log('req.body:', req.body);
    const { name, mail, message } = req.body
    const transporter = nodemailer.createTransport(
        {
            service: 'gmail',
            auth: {
                user: process.env.SENDERGMAIL,
                pass: process.env.APPPASSWORD
            }
        }
    )
    const mailOption = {
        from: process.env.SENDERGMAIL,
        to: process.env.ADMINGMAIL,
        subject: 'Enquiry!',
        text: `hi im ${name} , ${message}`,
        replyTo: mail
    }
    transporter.sendMail(mailOption, (err, info) => {
        if (err) {
            console.log("error", err)
            res.json({ success: false })
        }
        else {
            console.log('sent', info.response)
            res.json({ success: true })
        }

    })


})
app.listen(2030, () => {
    console.log('server is running at port 2030 http://localhost:2030')
})