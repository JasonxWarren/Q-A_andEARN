const bcrypt = require('bcryptjs');
const jwt = require ('jsonwebtoken');
const db = require ('../models');


const register = async (req, res) => {
    // console.log( req.body)
    try {
        const foundUser = await db.User.findOne({
            username: req.body.username
        })

        if(foundUser) {
           
            return res
                .status
                .json({ message: "username in use."})
        } else {
            
            const salt = await bcrypt.genSalt(9)
            const hash = await bcrypt.hash(req.body.password, salt)

            const newUser = {
                username: req.body.username,
                password:hash
            }


          const createdUser = db.User.create(newUser)
                .then((err, createdUser) => {
                })
      
                    return res
                   .status(201)
                   .json({status:201, message:"registered new user", createdUser})
            }
    } catch (err) {
        return res
            .status(500)
            .json({
                status: 500,
                errorMsg: err,
                message: "Internal Server Error."
            })
    }
}

const login = async(req,res)  => {
    try{
        const foundUser = await db.User.findOne({username: req.body.username}) 
        .select("+password") 
        if (!foundUser) {
            return res 
                .status(400)
                .json({
                    status: 400,
                    message: "Incorrect email or password"
            })
        }
        const isMatch= await bcrypt.compare(req.body.password, foundUser.password)

        if(isMatch){
            // console.log('is a match')
            const token= jwt.sign({_id:foundUser._id}, "answeraquestion10", {expiresIn: "48h"}
            )
            return res 
                .status(200)
                .json({
                    status: 200,
                    message: "Login successful", 
                    token
                })
        } else {
            return res
                .status(400)
                .json({
                    status: 400,
                    message: "Email or password is incorrect."
                }) 
        }
    } catch(err) {
        return res.status(500)
        .json({
            status: 500,
            errorMsg: err, 
            message: "Internal server error. Refresh your page and try again."
        })
    }
}
module.exports = {
    register,
    login
}