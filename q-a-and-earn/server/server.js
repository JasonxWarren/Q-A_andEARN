const path = require('path');
require("dotenv").config({path: "../.env"})
require('./models')
// External modules
const express = require('express');
const cors = require('cors');

// Internal modules

//Instanced modules
const app = express();
//const routes = require("./routes");

//Configuration 
const config= require("@q-a-and_earn/config");
//Midleware

//Routes and Controllers
//app.use("/api", routes);

// app.all("/api/*", (req, res, next) => {
//    res.send("HOLD UP THESE ARE NOT THE APIS YOU ARE LOOKING FOR")
// })
app.use((req, res, next) => {
    //res.sendFile(path.join(__dirname, "build", "index.html"))
    })
//Server Listener
app.listen(config.PORT,() => {
    console.log(`q&a is live at http://localhost:${config.PORT}.`);
})