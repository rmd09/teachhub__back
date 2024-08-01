const bcrypt = require("bcryptjs");
const { students, teachers } = require("../database/models");

const authTeacher = async(req, res, next) => {
    const user = await teachers.findOne({ username: req.body.username });
    if (user) {
        const password = await bcrypt.compare(req.body.password, user.password);
        if (password) {
            user.password = "";
            req.jwtObject = { _id: user._id, username: user.username };
            req.user = user;
            next();
        }
        else {
            res.status(400).send({ message: "Неправильное имя пользователя или пароль"});
        }
    }
    else {
        res.status(400).send({ message: "Неправильное имя пользователя или пароль"});
    }
}

module.exports = {
    authTeacher
}