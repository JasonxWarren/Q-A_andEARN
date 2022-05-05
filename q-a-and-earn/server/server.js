// External modules
const express = require('express');


// Internal modules

//Instanced modules
const app = express();

//Configuration 
const config= require("@Q-A-AND-EARN/config");
//Midleware

//Routes and Controllers

//Server Listener
app.listen(config.PORT,() => {
    console.log(`q&a is live at http://localhost:${config.PORT}.`);
})