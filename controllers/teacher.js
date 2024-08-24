const sendMe = (req, res) => {
    res.status(200).send(req.teacher);
}
const sendMeAndInvitingJWT = (req, res) => {
    res.status(200).send({ invitingJWT: req.token, user: req.teacher })
}
const sendInvitingJWT = (req, res) => {
    res.status(200).send({ invitingJWT: req.invitingJWT });
}
const sendUpdatedStudentOK = (req, res) => {
    res.status(200).send({ message: "Пользователь успешно изменён" });
}

module.exports = {
    sendMe,
    sendMeAndInvitingJWT,
    sendInvitingJWT,
    sendUpdatedStudentOK
}