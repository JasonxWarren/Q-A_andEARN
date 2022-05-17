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
const allUsersButCurrent = (req, res) => {
    let incomingReq = {
        User: req.userId,
    }
    db.User.find({ _id: { $ne: User } },  (err, foundAllOtherUsers) => {
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
                message: "Found all other users",
                data: foundAllOtherUsers
            })
    })
}

//Show user profile
const show= (req,res) => {
    console.log(req)
    db.User.findById(req.userId, (err,foundUser) => {
             console.log("FOUND BY ID" + foundUser)
             console.log(req.user)
        if (err) {
            return res.status(400)
            .json({
                message: "Failed to find the user profile.",
                error: err,
            }) 
        }  else {
             console.log(foundUser)
            return res.status(200).json({
            message: "Found User Profile",
            data: foundUser
                })
            }
})
}

//Update profile 
const updateProfile= (req, res) => {
    db.User.findByIdAndUpdate(
        {_id: req.userId },
        {
            $set: {
                description: req.body.description,
                expertise: req.body.expertise,  
            }
        }, 
        {new: true},
        (err,foundProfile) => {
        if (err) {
            return res.status(400)
            .json({
                message: "Failed to edit the user profile.",
                error: err,
            })
        } 
       
         else {
            console.log("found profile line 69: "+foundProfile)
            return res.status(200).json({
                message: "Updated User Profile",
                data: foundProfile,
                id: req.userId
        })
    }
    })
}
const deleteProfile = (req, res) => {
    db.User.findByIdAndDelete(req.userId, (err, deleteUser)=>{
        if (err) {
        return res
        .status(400)
        .json({
            message: "Bad Request; Profile was not deleted",
            error: err,
        })
    }else{
    return res
        .status(200)
        .json({
            message: "Profile Deleted",
            data: deleteUser
        })
    }
    })
}



module.exports = {
    index,
    allUsersButCurrent,
    show,
    updateProfile,
    deleteProfile,
}

