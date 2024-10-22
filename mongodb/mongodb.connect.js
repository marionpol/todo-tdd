const mongoose = require("mongoose");

async function connect() {
    try {
        await mongoose.connect("mongodb+srv://marionpoljakov:5dSxS8tEaQbzOpCz@appdb.tklz4.mongodb.net/?retryWrites=true&w=majority&appName=AppDB")
    }
    catch (err) {
        console.error("Error connecting to mongodb")
        console.error(err)
    }
}

module.exports = { connect }
