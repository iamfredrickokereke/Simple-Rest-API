const express = require("express");

const app = express();

app.get('/', (req, res) => { res.send("Connected to server")})

app.listen(8000, () => { console.log("Server is running on port " + port)});
