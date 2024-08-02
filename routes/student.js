const { sendMeStudent, sendJWT, sendUserCreated } = require("../controllers");
const { verifyToken, checkInvitingJwt, checkPublicNotes, checkEmptyFields, authStudent, signinToken, checkHasFieldsGreateValue, checkUniqueStudentUsername, hashPassword, fillUsernameAndPasswordOfStudent } = require("../middlewares");

const router = require("express").Router();

router.get("/student/check-inviting-jwt",
    verifyToken,
    checkInvitingJwt,
    checkPublicNotes,
    sendMeStudent
);

router.post("/student/auth",
    checkEmptyFields,
    authStudent,
    signinToken,
    checkPublicNotes,
    sendJWT
);

router.post("/student/registr",
    verifyToken,
    checkInvitingJwt,
    checkEmptyFields,
    checkHasFieldsGreateValue,
    checkUniqueStudentUsername,
    hashPassword,
    fillUsernameAndPasswordOfStudent,
    signinToken,
    checkPublicNotes,
    sendUserCreated
);

module.exports = router;