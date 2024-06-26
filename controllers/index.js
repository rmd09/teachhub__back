const { sendJWT, sendUserCreated } = require("./auth-and-registr");
const { sendMe } = require("./teacher");

module.exports = {
    sendJWT,
    sendUserCreated,
    sendMe
}