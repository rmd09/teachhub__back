const { sendMeStudent, sendJWT, sendUserCreated, sendOK } = require("../controllers");
const { verifyToken, checkInvitingJwt, checkPublicNotes, checkEmptyFields, authStudent, signinToken, checkHasFieldsGreateValue, checkUniqueStudentUsername, hashPassword, fillUsernameAndPasswordOfStudent, getMeStudent } = require("../middlewares");

const router = require("express").Router();

router.get("/student/check-inviting-jwt",
    verifyToken,
    checkInvitingJwt,
    checkPublicNotes,
    sendOK
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

router.get("/student/me",
    verifyToken,
    getMeStudent,
    checkPublicNotes,
    sendMeStudent
);

module.exports = router;