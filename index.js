const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 5001 });

wss.on('connection', function connection(ws) {
    ws.on('message', function message(data) {
        console.log(`Received: ${data}`);
    });

    ws.send('You have made a connection.');
});
