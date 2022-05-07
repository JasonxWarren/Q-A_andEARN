const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    username:String,
    description:String,
    walletId: String,
    walletBalance: Number,
    description: String,
    profile_image: {type: String},
    expertise: [String],
    Answers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Answer"
    }],
    Questions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question"
    }],
})

module.exports = mongoose.model('User', userSchema);