const path = require('path');
require("dotenv").config({path: "../.env"})
// require('./models')
// External modules
const express = require('express');
const cors = require('cors');

// Internal modules

//Instanced modules
const app = express();
const routes = require("./routes");
//const routes = require("./routes");

//Configuration 
const config= require("@qaae/config");
//Midleware

app.use(express.static(path.join("build")))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
//Routes and Controllers
app.use("/api", routes);
app.get('/favicon.ico', function(req,res){
    res.send("404");
  })
app.all("/api/*", (req, res, next) => {
   res.send("HOLD UP THESE ARE NOT THE APIS YOU ARE LOOKING FOR")
})
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "build", "index.html"))
    })
//Server Listener
app.listen(config.PORT,() => {
    console.log(`q&a is live at http://localhost:${config.PORT}.`);
})