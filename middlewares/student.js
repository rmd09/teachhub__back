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

module.exports = {
    checkInvitingJwt
}