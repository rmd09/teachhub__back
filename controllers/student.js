const sendMeStudent = (req, res) => {
    res.status(200).send(req.student);
}
const sendOK = (req, res) => {
    res.status(200).send("OK");
}

module.exports = {
    sendMeStudent,
    sendOK
}