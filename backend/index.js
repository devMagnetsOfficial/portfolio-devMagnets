const express = require('express')
const app = express()
app.use(express.json())
const nodemailer = require('nodemailer')
app.get('/', (req, res) => {
    res.send('server is running buddy ')
})
app.post('/sendMail', (req, res) => {
    const {name,mail,message}=req.body
    const transporter = nodemailer.createTransport(
        {
            service: 'gmail',
            auth: {
                user: 'devmagnets.mail@gmail.com',
                pass: 'apze dmjo lapv iulx'
            }
        }
    )
    const mailOption={
        from:'devmagnets.mail@gmail.com',
        to:'singhabhishek.engineer@gmail.com',
        subject:'Enquiry!',
        text:`hi im ${name} , ${message}`,
        replyTo:mail
    }
    transporter.sendMail(mailOption,(err,info)=>{
        if(err){
            console.log("error",err)
        }
        else{
            console.log('sent',info.response)
        }
    })

})
app.listen(2030, () => {
    console.log('server is running at port 2030 http://localhost:2030')
})