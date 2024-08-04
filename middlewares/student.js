const { students } = require("../database/models");

const checkInvitingJwt = async(req, res, next) => {
    const { _id } = req.jwtObject;
    const student = await students.findById(_id, { password: 0 });
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
    if (req.student && !req.student.isNotesPublic) {
        req.student.notes = "";
    }
    next();
}

const getMeStudent = async(req, res, next) => {
    const { _id } = req.jwtObject;
    try {
        const student = await students.findById(_id, { password: 0 });
        if (student) {
            req.student = student;
            next();
        } else {
            res.status(400).send("Некоректный jwt");
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
}

const fillInvitingJWT = async(req, res, next) => {
    const { _id } = req.jwtObject;
    const temp = await students.findByIdAndUpdate(_id, { invitingJWT: req.token});
    next();
}

module.exports = {
    checkInvitingJwt,
    checkPublicNotes,
    getMeStudent,
    fillInvitingJWT
}