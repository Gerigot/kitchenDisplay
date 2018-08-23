const express = require('express')
const http = require('http');
const WebSocket = require('ws');
const path = require('path');
var bodyParser = require('body-parser');
var test = require('./test');
var util = require('./util');
var daoData = require('./mongodb/daoData').default

const app = express();
var info = undefined;
const broadcastToAll = (info) => {
  if (info) daoData.inserisci(info);
  wss.clients.forEach((socket) => {
    if (socket.readyState === 1) socket.send(JSON.stringify(info));
  })
}

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..', 'build')))

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
app.get("/getAll", (req, res) => {
  daoData.all().then(value => {
    res.send(value);
  })
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
  ws.on('error', function error(error) {
    console.log("error: --> ", error)
  })
  if(!info){
    daoData.getLast().then(value => {
      console.log(value, value.data);
      if(value && value.data && value.data.length > 0){
        info = value.data;
        broadcastToAll(info);
      };
    }) 
  }else{
    broadcastToAll(info);
  }
});
