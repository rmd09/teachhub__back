const router = require("express").Router();
const { sendJWT } = require("../controllers");
const { checkEmptyFields, authTeacher, signinToken } = require("../middlewares");

router.post("/teacher/auth",
    checkEmptyFields,
    authTeacher,
    signinToken,
    sendJWT
)

module.exports = router;