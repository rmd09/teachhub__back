const { sendMe, sendMeAndInvitingJWT, sendJWT, sendUserCreated, sendInvitingJWT } = require("../controllers");
const { verifyToken, getMe, createNewStudent, signinToken, checkEmptyFields, authTeacher, checkHasFieldsGreateValue, checkUniqueTeacherUsername, hashPassword, createNewTeacher, fillInvitingJWT, getNewStudentJwt } = require("../middlewares");

const router = require("express").Router();

router.post("/teacher/auth",
    checkEmptyFields,
    authTeacher,
    signinToken,
    sendJWT
);

router.post("/teacher/registr", 
    checkEmptyFields, 
    checkHasFieldsGreateValue, 
    checkUniqueTeacherUsername, 
    hashPassword, 
    createNewTeacher, 
    signinToken,
    sendUserCreated
);

router.get("/teacher/me",
    verifyToken,
    getMe,
    sendMe
);

router.put("/teacher/create-student",
    verifyToken,
    getMe,
    createNewStudent,
    signinToken,
    fillInvitingJWT,
    sendMeAndInvitingJWT
);
router.get("/teacher/new-student-jwt/:id",
    verifyToken,
    getNewStudentJwt,
    sendInvitingJWT
);

module.exports = router;