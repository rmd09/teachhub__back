const { sendMe } = require("../controllers");
const { verifyToken, getMe } = require("../middlewares");

const router = require("express").Router();

router.get("/teacher/me",
    verifyToken,
    getMe,
    sendMe
)

module.exports = router;