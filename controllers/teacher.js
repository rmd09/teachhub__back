const sendMe = (req, res) => {
    res.status(200).send(req.teacher);
}
const sendMeAndInvitingJWT = (req, res) => {
    res.status(200).send({ invitingJWT: req.token, user: req.teacher })
}
const sendInvitingJWT = (req, res) => {
    res.status(200).send({ invitingJWT: req.invitingJWT });
}

module.exports = {
    sendMe,
    sendMeAndInvitingJWT,
    sendInvitingJWT
}