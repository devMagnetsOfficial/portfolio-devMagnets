// db
const mongoose = require('mongoose')
const MONGODATABASE_LINK = process.env.MONGODATABASE_LINK

const db = async () => {
    try {
        await mongoose.connect(MONGODATABASE_LINK)
        console.log('DB Connected Sucessfully')
    } catch (err) {
        console.log('DB Connection Error' + err)
    }
}
module.exports=db