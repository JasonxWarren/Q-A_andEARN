const mongoose = require ('mongoose');
const db = mongoose.connection;
console.log(process.env.MONGO_URL)
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log(`mongoDB successfully connected at ${db.host}: ${db.port}`)
    })
    .catch((err) => {
        console.log(`mongodb connection failed: ${err}`)
    })


module.exports = {
    User: require('./User'),
    Question: require("./Question"),
    Answer: require("./Answer"),
}
