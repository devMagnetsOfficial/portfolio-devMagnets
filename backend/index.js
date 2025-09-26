const express = require('express')
const cors = require('cors')

const app = express()
const ejs=require('ejs')
app.set('view engine','ejs')
app.set('views','./mail')
require('dotenv').config({})
app.use(express.json())
app.use(cors())
const nodemailer = require('nodemailer')
app.get('/', (req, res) => {
   res.render('responseMailTemplate.ejs',{name:'abhishek',message:'i want your service'})
})
app.post('/sendMail', async (req, res) => {
    console.log('req.body:', req.body);
    const { name, mail, message } = req.body
    try {
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
        const responseMail=await ejs.renderFile('./mail/responseMailTemplate.ejs',{name,message})
        const responseMailOption = {
            from: process.env.ADMINGMAIL,
            to: mail,
            subject: 'Response to Your Email',
            html: responseMail
        }
        await transporter.sendMail(mailOption)
        await transporter.sendMail(responseMailOption)
        res.json({ success: true })
    } catch (err) {
        res.json({ success: false })
    }


})
app.listen(2030, () => {
    console.log('server is running at port 2030 http://localhost:2030')
})