const { sendMe, sendMeAndInvitingJWT } = require("../controllers");
const { verifyToken, getMe, createNewStudent, signinToken } = require("../middlewares");

const router = require("express").Router();

router.get("/teacher/me",
    verifyToken,
    getMe,
    sendMe
);

router.put("/teacher/new_student",
    verifyToken,
    getMe,
    createNewStudent,
    signinToken,
    sendMeAndInvitingJWT
)

module.exports = router;