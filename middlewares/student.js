const { students } = require("../database/models");

const checkInvitingJwt = async(req, res, next) => {
    const { _id } = req.jwtObject;
    const student = await students.findById(_id);
    if (student && !student.isRegistered) {
        req.student = student;
        next();
    } else {
        res.status(400).send("Unauthorized");
    }
}

const checkPublicNotes = (req, res, next) => { //Если заметки приватные, они не должны отправляться ученику
    if (req.user && !req.user.isNotesPublic) {
        req.user.notes = "";
    }
    if (req.student && !req.user.isNotesPublic) {
        req.student.notes = "";
    }
    next();
}

module.exports = {
    checkInvitingJwt,
    checkPublicNotes
}