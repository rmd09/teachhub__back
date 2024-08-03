const mongoose = require("mongoose");
const { timetableSchema, usefulLinksSchema } = require("./usefulSchemas")

const StudentSchema = new mongoose.Schema({
    username: {
        type: String,
        required: false,
    },
    password: {
        type: String,
        required: false,
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
        required: false,
        default: ""
    },
    isNotesPublic: {
        type: Boolean,
        required: false,
        default: false
    },
    usefulLinks: [{
        type: usefulLinksSchema
    }],
    timetable: [{
        type: timetableSchema
    }],
    isRegistered: {
        type: Boolean,
        required: true
    },
    invitingJWT: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model("students", StudentSchema);