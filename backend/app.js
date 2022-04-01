const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();
const path = require('path');

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const meetingRouter = require("../Frontend/routes/meeting_route")

app.use ("/api/meetings", meetingRouter)


app.use((err, req, res, next) => {
    console.log(err);
    if(err.status) {
        res.status(err.status).json(err)
    } else {
        res.status(500).json(err)
    }
    next(err)
})

app.listen(PORT, () => {
    console.log("Listening on port ", PORT);
})
