const { teachers } = require("../database/models")

const getMe = async(req, res, next) => {
    const user = await teachers.findById(req.jwtObject._id);
    if (user) {
        user.password = "";
        req.user = user;
        next();
    }
    else {
        res.status(401).send("Unauthorized");
    }
}

module.exports = {
    getMe
}