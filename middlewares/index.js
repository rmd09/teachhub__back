const {
    checkEmptyFields,
    checkUniqueTeacherUsername,
    checkUniqueStudentUsername,
    hashPassword,
    createNewTeacher,
    checkHasFieldsGreateValue
} = require("./registr");
const { signinToken, verifyToken } = require("./jwt");
const { authTeacher } = require("./auth");
const { getMe, createNewStudent } = require("./teacher");


module.exports = {
    checkEmptyFields,
    checkUniqueTeacherUsername,
    checkUniqueStudentUsername,
    hashPassword,
    createNewTeacher,
    checkHasFieldsGreateValue,
    signinToken,
    verifyToken,
    authTeacher,
    getMe,
    createNewStudent
}