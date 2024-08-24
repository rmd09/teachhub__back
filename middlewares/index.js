const {
    checkEmptyFields,
    checkUniqueTeacherUsername,
    checkUniqueStudentUsername,
    hashPassword,
    createNewTeacher,
    checkHasFieldsGreateValue,
    fillUsernameAndPasswordOfStudent
} = require("./registr");
const { signinToken, verifyToken } = require("./jwt");
const { authTeacher, authStudent } = require("./auth");
const { getMe, createNewStudent, getNewStudentJwt, changeStudent } = require("./teacher");
const { checkInvitingJwt, checkPublicNotes, getMeStudent, fillInvitingJWT } = require("./student");


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
    checkInvitingJwt,
    fillUsernameAndPasswordOfStudent,
    authStudent,
    checkPublicNotes,
    getMeStudent,
    fillInvitingJWT,
    getNewStudentJwt,
    changeStudent
}