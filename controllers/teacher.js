const sendMe = (req, res) => {
    res.status(200).send(req.user);
}

module.exports = {
    sendMe
}