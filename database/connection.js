const mongoose = require('mongoose');

const connect = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/teachhub");
        console.log("Успешно подключились к MongoDB");
    } 
    catch (error) {
        console.log(error);
    }
}

module.exports = connect;