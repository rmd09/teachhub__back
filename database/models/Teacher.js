const mongoose = require("mongoose");
const students = require("./Student");

const TeacherSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: students
    }]
});

module.exports = new mongoose.model("teachers", TeacherSchema);