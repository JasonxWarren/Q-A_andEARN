// Rest Routes
const db = require('../models');

/*
 * Index - GET - /user  - Presentational - respond with all users
 * New - GET - /user/new  - Presentational Form - a page with a form to create a new user
 * Show - GET - /user/:id  - Presentational - respond with specific user by id
 * Create - Post - /user  - Functional - recieve data from new route to create a user
 * Edit - GET - /user/:id/edit  - Presentational Form - respond with a form prefilled with user data
 * Update - PUT - /user/:id  - Functional - recieve data from edit to update a specific user
 * Delete - DELETE - /user/:id  - Functional - Deletes user by id from request
 */


const index = (req, res) => {
    let incomingReq = {
        User: req.userId,
    }
    db.User.find(incomingReq, (err, foundUser) => {
        if (err) {
            return res
                .status(400)
                .json({
                    message: "Error 400!",
                    err: err,
                })
        }
        return res
            .status(200)
            .json({
                message: "Found users",
                data: foundUser
            })
    })
}


//Show user profile
const show= (req,res) => {
    db.User.findById(req.userId, 
        (err,foundUser) => {
            // console.log("FOUND BY ID" + foundUser)
        if (err) {
            return res.status(400)
            .json({
                message: "Failed to find the user profile.",
                error: err,
            }) 
        }  else {
            // console.log(foundUser)
            return res.status(200).json({
            message: "Found User Profile",
            data: foundUser
                })
            }
})
}



module.exports = {
    index,
    show,
}

