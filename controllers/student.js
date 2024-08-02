const sendMeStudent = (req, res) => {
    res.status(200).send(req.student);
}

module.exports = {
    sendMeStudent
}