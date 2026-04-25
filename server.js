const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8802 });

wss.on("connection", (ws) => {
    console.log("connection established");

    ws.on("message", (data) => {
        console.log(`Client has sent ${data}`);
    })

    ws.on("close", () => {
        console.log("disconnected");
    });
});