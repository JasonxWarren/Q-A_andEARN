const db = require("../models");


const index = (req, res) => {
    let incomingReq = {
        User: req.userId,
    }
    db.Question.find(incomingReq, (err, foundPosts) => {
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
                message: "Found Questions",
                data: foundQuestions
            })
    })
}

module.exports = {
    index
}