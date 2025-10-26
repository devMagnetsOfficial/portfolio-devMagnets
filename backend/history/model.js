const mongoose = require('mongoose')

const HistorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,    
    },
    author: {
        type: String,
        required: true,
        
    },
    duration: {
        type: String,
        required: true,
        
    },
    description: {
        type: String,
        required: true,
        
    },
    role: {
        type: String,
        required: true,
        
    }
})


module.exports=mongoose.model('history', HistorySchema)
