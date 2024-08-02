const router = require("express").Router();
const { sendJWT } = require("../controllers");
const { checkEmptyFields, authTeacher, signinToken, authStudent, checkPublicNotes } = require("../middlewares");

router.post("/teacher/auth",
    checkEmptyFields,
    authTeacher,
    signinToken,
    sendJWT
)

router.post("/student/auth",
    checkEmptyFields,
    authStudent,
    signinToken,
    checkPublicNotes,
    sendJWT
);
module.exports = router;