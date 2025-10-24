// env 
require('dotenv').config({ path: '' })
const PORT = process.env.PORT
// db connection
const db = require('./db/db.js')
db()

// app
const express = require('express')
const app = express();
// parser
app.use(express.json())
// cors policy
const cors = require('cors')
app.use(cors({
    origin: '*'
}))
// portfolio
const portfolio = require('./portfolio/route.js')
app.use('/portfolio', portfolio)

//recommendation
const recommendation = require('./recommendation/route.js')
app.use('/recommendation', recommendation)

// service
const service = require('./service/route.js')
app.use('/service', service)

//  index
app.get('/', (req, res) => {
    res.send('hi buddy')
})

const email = require('./mail/email.js')
app.get('/mail', async (req, res) => {
    const message = {
        from: process.env.MAIL,
        to: 'dilip.9540848978@gmail.com',
        replyTo:'singhabhishek.engineer@gmail.com',
        subject: 'checking',
        text: 'done 👌'
    }
    try {
        const response = await email(message)
        res.json({ success: true, response })
    } catch (err) {
        res.json({ err: err, success: false })
    }

})


// listen
app.listen(PORT, () => {
    console.log("http://localhost:" + PORT)
})