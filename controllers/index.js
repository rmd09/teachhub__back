const { sendJWT, sendUserCreated } = require("./auth-and-registr");
const { sendMeStudent, sendOK } = require("./student");
const { sendMe, sendMeAndInvitingJWT } = require("./teacher");

module.exports = {
    sendJWT,
    sendUserCreated,
    sendMe,
    sendMeAndInvitingJWT,
    sendMeStudent,
    sendOK
}