const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:3000/hereIsWS', {
    rejectUnauthorized: false,
});
// event emmited when connected
ws.onopen = function () {
    console.log('websocket is connected ...')
    // sending a send event to websocket server
    ws.send('Hello websocket')
}
// event emmited when receiving message 
ws.onmessage = function (ev) {
    console.log(ev.data);
}

process.on('SIGINT', function() {
    console.log("Caught interrupt signal");
    ws.close();
    process.exit();
});
