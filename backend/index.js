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

//  index
app.get('/', (req, res) => {
    res.send('hi buddy')
})

// listen
app.listen(PORT, () => {
    console.log("http://localhost:" + PORT)
})