//this file connects to the database in mongodbatlas
const mongoose = require('mongoose');//dependencdy for the database connection and talking to 
const config = require('config');//configure basics
const db = config.get('mongoURI');//this will get the link to connect to the database

const connectDB = async () => {
	try {//we use try and catches to run asynchronous functions 
		await mongoose.connect(db, {
			useNewUrlParser: true,//mongoose.connect requires these parameters now a days to work properly
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true
		});

		console.log('MongoDB Connected...');//success in connecting to the datbase
	} catch (err) {//we use this to catch the errors and if there is an error we will console.log this
		console.error(err.message);
		// Exit process with failure
		process.exit(1);
	}
};

module.exports = connectDB;//export this
