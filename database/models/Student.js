const mongoose = require("mongoose");

const usefulLinksSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
});
const timetableSchema = new mongoose.Schema({
    dayOfWeek: {
        type: String,
        required: true,
        enum: [
            "Понедельник",
            "Вторник",
            "Среда",
            "Четверг",
            "Пятница",
            "Суббота",
            "Воскресенье"
        ]
    },
    time: {
        type: String,
        required: true      //ЧЧ:ММ
    }
})

const StudentSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    notes: {
        type: String,
        required: true
    },
    isNotesPublic: {
        type: Boolean,
        required: true
    },
    usefulLinks: [{
        type: usefulLinksSchema
    }],
    timetable: [{
        type: timetableSchema
    }]
});

module.exports = mongoose.model("students", StudentSchema);