const db = require("../models");


const index = (req, res) => {
    console.log("here in controllers")
    let incomingReq = {
        User: req.userId,
    }
    db.Answer.find(incomingReq, (err, foundAnswers) => {
        if (err) {
            return res
                .status(400)
                .json({
                    message: "Error 400",
                    err: err,
                })
        }
        return res
            .status(200)
            .json({
                message: "Found Answers",
                data: foundAnswers
            })
    })
}
const create = (req, res) => {
    let incomingReq = {
        User: req.userId,
        answer: req.body.answer,
        questionSelected: req.body.questionSelected,
    }
    db.Answer.create(
        incomingReq, 
        (err, savedAnswer) => {
        if (err) {
            // console.log(err)
            return res.status(400).json({
                message: "Error 400",
                error: err 
            })
        } else {
            // console.log("savedPost: ",savedPost)
            db.User.findById(incomingReq.User)
            .exec(function (err, foundUser) {
                if (err) return res 
                    .status(400)
                    .json({
                        message: "Failed to find user who is trying to create Answer",
                        error: err
                    })
                else {
                    foundUser.Answers.push(savedAnswer);
                    foundUser.save();
                }
            });
            // db.Question.findById(incomingReq.Question)
            // db.Question.find({})
            db.Question.findById(incomingReq.questionSelected)
            .exec(function (err, foundQuestion){
                if (err) return res 
                    .status(400)
                    .json({
                        message: "Failed to find question that an answer is being created for",
                        error: err
                    })
                else {
                    console.log(req.body)
                    foundQuestion.Answers.push(savedAnswer);
                    foundQuestion.save();
                }
            });
            return res.status(201).json({
                message: "Created Answer for question",
                data: savedAnswer
            })
        }
    })
}

module.exports = {
    index,
    create,
}