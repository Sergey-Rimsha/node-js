const http = require('http');
const {usersController} = require("./usersController");

const port = 7001

// get global error
process.on('uncaughtException', function (err) {
    console.log(err);
})

const cors = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return true
    }
    return false
}

const server = http.createServer((req, res) => {

    // Set CORS headers
    if (cors(req, res)) return

    console.log('some request')

    switch (req.url) {
        case '/users': {
            usersController(req, res)
            break;
        }
        case '/tasks': {
            res.write('tasks')
            break;
        }
        default: {
            res.write('nod found')
            break;
        }
    }
});

//start server, add port
server.listen(port)