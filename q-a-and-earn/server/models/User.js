const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    password: {
        type: String, 
        select: false,
    },
    username:String,
    description: {type: String,  default:"hello I ask good questions, and give good answers, update me to make this description your own"},
    walletId: {type: String, default: mongoose.Types.ObjectId},
    walletBalance: {type: Number, default:"100"},
    profile_image: {type: String},
    expertise: {type: [String] , default:"computers, cars"},
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