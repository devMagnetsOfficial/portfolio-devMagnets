// env 
require('dotenv').config({ path: '' })
const PORT = process.env.PORT
// db
const mongoose = require('mongoose')
const MONGODATABASE_LINK = process.env.MONGODATABASE_LINK
console.log(MONGODATABASE_LINK)
const db = async () => {
    try {
        await mongoose.connect(MONGODATABASE_LINK)
        console.log('DB Connected Sucessfully')
    }catch(err){
        console.log('DB Connection Error'+err)
    }
}
db()
// app
const express = require('express')
const app = express();
app.get('/', (req, res) => {
    res.send('hi buddy')
})
// db

// add portfolio
app.get('/portfolio/add', (req, res) => {

})
app.listen(PORT, () => {
    console.log("http://localhost:" + PORT)
})