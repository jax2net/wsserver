const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:5001');

ws.on('open', function open() {
    ws.send('this is my message Joe MAMA');
});

ws.on('message', function message(data) {
    console.log(`Received ${data}`);
});
