const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const questionSchema = new Schema ({
    budget: {type: Number,
    min: 1,
    max: 99
  },
    description:String,
    name: String,
    image_question: {type: String},
    Answer_total: Number,
    time_limit: {type: Number, default:"20"},
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