const mongoose = require("mongoose");
const { logData } = require("./utils");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/crud-app");
        console.log(`Database connected!`);
    }
    catch(err) {
        const errorLog = `Error - Database connection failed , ${err.message} - Date - ${Date.now()}\n`; 
        logData("errors_log.txt", errorLog);
        process.exit(1);
    }
}

module.exports = connectDB;