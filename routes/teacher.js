const { sendMe } = require("../controllers");
const { verifyToken, getMe, createNewStudent } = require("../middlewares");

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
    sendMe
)

module.exports = router;