const { sendUserCreated } = require("../../controllers/auth-and-registr");
const { checkEmptyFields, checkUniqueTeacherUsername, hashPassword, createNewTeacher, checkHasFieldsGreateValue } = require("../../middlewares");

const router = require("express").Router();

router.post("/teacher/registr", checkEmptyFields, checkHasFieldsGreateValue, checkUniqueTeacherUsername, hashPassword, createNewTeacher, sendUserCreated);

module.exports = router;