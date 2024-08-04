const express = require("express");
const connect = require("./database/connection");
const bodyParser = require("body-parser");

const { teacher, student } = require("./routes");
const cors = require("./middlewares/cors");

const api = express();
const PORT = 3001;

connect();

api.use(
    cors,
    bodyParser.json(),
    teacher,
    student
);

api.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});