const sendUserCreated = (req, res) => {
    res.status(200).send({ message: "Пользователь успешно создан", jwt: req.token, user: req.userCreated });
}

const sendJWT = (req, res) => {
    res.status(200).send({ message: "Пользователь успешно авторизован", jwt: req.token, user: req.user})
}

module.exports = {
    sendUserCreated,
    sendJWT
}