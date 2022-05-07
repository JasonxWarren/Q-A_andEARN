const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const questionSchema = new Schema ({
    budget:Number,
    description:String,
    name: String,
    description: String,
    image_question: {type: String},
    Answer_total: Number,
    time_limit: Number,
    tags: [String],
    
    User: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    Answers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Answer"
    }],
})

module.exports = mongoose.model('Question', questionSchema);