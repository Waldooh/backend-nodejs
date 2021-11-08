const mongoose = require("mongoose");

const connect = () => 
    new Promise((resolve, reject) => {
    
    mongoose.connect(
        "mongodb+srv://Mandoolorian:Yna9UxxLMM6F4RiJ@cluster0.kj6mf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
        }
    );

    const db = mongoose.connection;

    db.on("open", () => {
        console.warn("Connection successfuly");
        resolve(mongoose);
    });

    db.on("error", (error) => {
        console.error("Connection failed", error);
        reject(error);
    });
});

module.exports = {
    connect,
}