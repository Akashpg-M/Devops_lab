const express = require("express");

const app = express();
const PORT = 3000;

app.get("/status", (req, res) => {
    res.json({
        status: "Node.js API deployed through Jenkins"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});