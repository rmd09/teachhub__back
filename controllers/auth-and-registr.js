const sendUserCreated = (req, res) => {
    res.status(200).send({ message: "Пользователь успешно создан", jwt: req.token, user: req.userCreated });
}

module.exports = {
    sendUserCreated
}