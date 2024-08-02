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
const { checkInvitingJwt } = require("./student");


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
    createNewStudent,
    checkInvitingJwt
}