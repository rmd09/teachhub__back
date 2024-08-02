const { sendMe, sendMeAndInvitingJWT, sendJWT, sendUserCreated } = require("../controllers");
const { verifyToken, getMe, createNewStudent, signinToken, checkEmptyFields, authTeacher, checkHasFieldsGreateValue, checkUniqueTeacherUsername, hashPassword, createNewTeacher } = require("../middlewares");

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

router.put("/teacher/new-student",
    verifyToken,
    getMe,
    createNewStudent,
    signinToken,
    sendMeAndInvitingJWT
)

module.exports = router;