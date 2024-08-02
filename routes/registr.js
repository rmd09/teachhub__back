const { sendUserCreated } = require("../controllers");
const { checkEmptyFields, checkUniqueTeacherUsername, hashPassword, createNewTeacher, checkHasFieldsGreateValue, signinToken, checkUniqueStudentUsername, checkInvitingJwt, verifyToken, fillUsernameAndPasswordOfStudent, checkPublicNotes } = require("../middlewares");

const router = require("express").Router();

router.post("/teacher/registr", 
    checkEmptyFields, 
    checkHasFieldsGreateValue, 
    checkUniqueTeacherUsername, 
    hashPassword, 
    createNewTeacher, 
    signinToken,
    sendUserCreated
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