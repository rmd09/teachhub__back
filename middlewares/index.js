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
const { getMe } = require("./teacher");


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
    getMe
}