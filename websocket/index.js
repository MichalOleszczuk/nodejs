const express = require('express');
const http = require("http");
const WebSocketServer = require('ws').Server;
const app = express();
const server = http.createServer(app);

app.get('/', function (req, res) {
    res.send('Hello World!');
})

server.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

wss = new WebSocketServer({ server: server, path: "/hereIsWS" })
wss.on('connection', function (ws) {
    ws.on('message', function (message) {
        console.log('received: %s', message)
    });
    const sending = setInterval(
        () => {
            if (ws.readyState != ws.OPEN) {
                console.error('Client state is ' + ws.readyState);
                ws.close();
                clearInterval(sending);
            } else {
                ws.send(`${new Date()}`);
            }
        },
        1000
    );
    ws.on('error', function (reason, code) {
        console.log('socket error: reason ' + reason + ', code ' + code);
    });
    ws.onclose = () => {
        console.log("closed");
    };
})
