const mongoose = require("mongoose");
var mongoURL = "mongodb+srv://LakshmiSaravanan:Happy55@cluster0.uvx3v.mongodb.net/mern-pizza"
mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true })
var db = mongoose.connection

db.on('connected', () => {
	console.log('momgo db Connection Succesfully')
})

db.on('error', () => {
	console.log('momgo db Connection Faild')
})
module.exports = mongoose