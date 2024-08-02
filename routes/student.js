const { sendMeStudent } = require("../controllers");
const { verifyToken, checkInvitingJwt, checkPublicNotes } = require("../middlewares");

const router = require("express").Router();

router.get("/student/check-inviting-jwt",
    verifyToken,
    checkInvitingJwt,
    checkPublicNotes,
    sendMeStudent
);

module.exports = router;