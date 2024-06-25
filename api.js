const express = require("express");
const connect = require("./database/connection");
const bodyParser = require("body-parser");

const { auth, registr } = require("./routes/Teacher");

const api = express();
const PORT = 3000;

connect();

api.use(
    bodyParser.json(),
    registr
);

api.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});