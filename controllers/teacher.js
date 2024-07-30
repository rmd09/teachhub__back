const sendMe = (req, res) => {
    res.status(200).send(req.teacher);
}

module.exports = {
    sendMe
}