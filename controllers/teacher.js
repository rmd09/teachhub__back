const sendMe = (req, res) => {
    res.status(200).send(req.teacher);
}
const sendMeAndInvitingJWT = (req, res) => {
    res.status(200).send({ invitingJWT: req.token, user: req.teacher })
}

module.exports = {
    sendMe,
    sendMeAndInvitingJWT
}