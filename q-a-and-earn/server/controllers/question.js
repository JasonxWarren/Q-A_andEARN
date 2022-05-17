const db = require("../models");


const index = (req, res) => {
    // let incomingReq = {
    //     User: req.userId,
    // }
    db.Question.find({}, (err, foundQuestions) => {
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
// const indexUser = (req, res) => {
//     let incomingReq = {
//         User: req.userId,
//     }
//     db.Question.find(incomingReq, (err, foundQuestions) => {
//         if (err) {
//             return res
//                 .status(400)
//                 .json({
//                     message: "Error 400",
//                     err: err,
//                 })
//         }
//         return res
//             .status(200)
//             .json({
//                 message: "Found Questions",
//                 data: foundQuestions
//             })
//     })
// }
const create = (req, res) => {
    let incomingReq = {
        User: req.userId,
        budget: req.body.budget,
        name: req.body.name,
        description: req.body.description,
        time_limit: req.body.time_limit,
    }
    db.Question.create(
        incomingReq, 
        (err, savedQuestion) => {
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
                        message: "Failed to find user who is trying to create question",
                        error: err
                    })
                else {
                    foundUser.Questions.push(savedQuestion);
                    foundUser.walletBalance=foundUser.walletBalance-incomingReq.budget
                    foundUser.save();
                }
            });
            return res.status(201).json({
                message: "Created Question",
                data: savedQuestion
            })
        }
    })
}

module.exports = {
    index,
    create,
}