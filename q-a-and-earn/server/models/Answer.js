const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const answerSchema = new Schema ({
    answer:{type: String, required: true},
    isPending: Boolean,
    image: String,
    answerTags: [String],
    User: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    Answers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Answer"
    }],
})

module.exports = mongoose.model('Answer', answerSchema);