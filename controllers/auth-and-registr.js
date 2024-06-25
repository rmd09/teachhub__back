const sendUserCreated = (req, res) => {
    res.status(200).send({ message: "Пользователь успешно создан" });
}

module.exports = {
    sendUserCreated
}