const { teachers } = require("../database/models")

const getMe = async(req, res, next) => {
    const user = await teachers.findById(req.jwtObject._id);
    user.password = "";
    req.user = user;
    next();
}

module.exports = {
    getMe
}