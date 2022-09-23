const express = require('express');
const cors = require('cors');
const {getUsers, createUser} = require("./repository");
const users = require("./usersRouter");
const bodyParser = require('body-parser');

// added app express
const app = express();

const port = 7001

// get global error
process.on('uncaughtException', function (err) {
    console.log(err);
})

// connect CORS
app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// parse application/json
app.use(bodyParser.json())

// userRouter base endpoint
app.use('/users', users);

app.get('/tasks', (req, res) => {
    res.send('tasks')
})

// default url nod found
app.use((req, res) => {
    res.send({"value": 404})
})

//add listener port localhost
app.listen(port, () => {
    console.log('Example app port 7001')
})

