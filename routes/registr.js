const { sendUserCreated } = require("../controllers");
const { checkEmptyFields, checkUniqueTeacherUsername, hashPassword, createNewTeacher, checkHasFieldsGreateValue, signinToken } = require("../middlewares");

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

module.exports = router;