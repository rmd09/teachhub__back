const express = require("express");

const api = express();
const PORT = 3000;

api.get("/", (req, res) => {
    res.send("Hello World");
})

api.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});