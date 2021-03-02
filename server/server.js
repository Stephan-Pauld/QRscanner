const express = require("express");
const dotenv = require('dotenv');
const cors = require("cors");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
dotenv.config();


const port = Number(process.env.PORT || 3331);
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.options("*", cors());

const usersRouter = require('./routes/users');

app.use('/users', usersRouter);

mongoose.connect(process.env.HOST, {
    useNewUrlParser:true,
    useUnifiedTopology: true,
})
    .then(res => {
        console.log("Connected To DB");
    })
    .catch(err => {
        console.log(err);
    })


app.listen(port, () =>
    console.log(`🚀 Server listening on port:${port}!`));


module.exports = app;