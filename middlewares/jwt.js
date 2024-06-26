const jwt = require("jsonwebtoken");
const path = require("path");
const fs = require("fs").promises;

const signinToken = async(req, res, next) => {
    try {
        const privateKey = await fs.readFile(path.join("keys", "jwt_rsa"), "utf8");
        const token = jwt.sign(req.jwtObject, privateKey, { 
            algorithm: "RS256", 
            expiresIn: req.body.needToRemember ? "24d" : "4s"
        });
        req.token = token;
        next();
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
}

const verifyToken = async(req, res, next) => {
    try {
        const privateKey = await fs.readFile(path.join("keys", "jwt_rsa"), "utf8");
        const token = req.headers.authorization;
        if (token.includes("Bearer ")) {
            const user = jwt.verify(token.replace("Bearer ", ""), privateKey, { algorithms: ""});
            if (user) {
                req.jwtObject = user;
                next();
            }
            else {
                res.status(401).send("Unauthorized");
            }
        } else {
            res.status(401).send("Unauthorized");
        }
    } catch (error) {
        res.status(401).send("Unauthorized");
    }
}

module.exports = {
    signinToken,
    verifyToken
}