const { sendMeStudent } = require("../controllers");
const { verifyToken, checkInvitingJwt } = require("../middlewares");

const router = require("express").Router();

router.get("/student/check-inviting-jwt",
    verifyToken,
    checkInvitingJwt,
    sendMeStudent
);

module.exports = router;