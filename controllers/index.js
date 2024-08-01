const { sendJWT, sendUserCreated } = require("./auth-and-registr");
const { sendMe, sendMeAndInvitingJWT } = require("./teacher");

module.exports = {
    sendJWT,
    sendUserCreated,
    sendMe,
    sendMeAndInvitingJWT
}