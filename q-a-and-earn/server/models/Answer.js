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
    Questions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question"
    }],
})

module.exports = mongoose.model('Answer', answerSchema);