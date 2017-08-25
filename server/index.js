const express = require('express')
const http = require('http');
const WebSocket = require('ws');
const path = require('path');
var bodyParser = require('body-parser');
var test = require('./test');
var util = require('./util');

const app = express();
var info = undefined;
const broadcastToAll = (info) => {
  wss.clients.forEach((socket) => {
    if (socket.readyState === 1) socket.send(JSON.stringify(info));
  })
}

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'..', 'build')))

app.get('/test/stop', (req, res) => {
  test.stopTest();
  res.send("test stopped");
})

app.get('/test/start', (req, res) => {
  test.startTest(broadcastToAll);
  res.send("test started");
})

app.post('/data', (req, res) => {
  info = util.createFormattedArray(req.body.data);
  broadcastToAll(info);
  res.send(req.body);
})

var server = http.createServer(app);
server.listen(8080, function () {
  console.log('listening on port 8080!')
})
const wss = new WebSocket.Server({ server, path: "/websocket" });
wss.on('connection', function connection(ws, req) {
  console.log("new connection - list: " + wss.clients.size);
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });
  ws.on('close', (code, reason) => {
    console.log("ws closed: ", code, "reason: ", reason);
  })
  broadcastToAll(info);
});
