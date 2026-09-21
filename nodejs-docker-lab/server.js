const express = require("express");

const app = express();
const PORT = 3000;

app.get("/status", (req, res) => {
    res.json({
        status: "Node.js API is running",
        version: "v1"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});