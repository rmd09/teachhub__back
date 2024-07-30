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
});

module.exports = {
    usefulLinksSchema,
    timetableSchema
}