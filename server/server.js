const express = require("express");
const dotenv = require('dotenv');
const cors = require("cors");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


dotenv.config();
const port = Number(process.env.PORT || 3001);
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.options("*", cors());

const usersRouter = require('./routes/users');
const eventsRouter = require('./routes/events');

app.use('/users', usersRouter);
app.use('/events', eventsRouter);

mongoose.connect(process.env.URI, {
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