const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

let connectionCount = 0;
const SocketEvent = {
  MESSAGE: 'message-event'
};
Object.freeze(SocketEvent);

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.get('/userNumber', (req, res) => {
  res.status(200).send({userNumber: connectionCount});
});

io.on('connection', (socket) => {
  connectionCount++;
  logTotalConnections();

  socket.on('disconnect', () => {
    connectionCount--;
    logTotalConnections();
  });

  socket.on(SocketEvent.MESSAGE, (message) => {
    io.emit(SocketEvent.MESSAGE, message);
  });
});

function logTotalConnections() {
  console.log('Total number of connections: ', connectionCount);
}

http.listen(3000, () => {
  console.log('listening on localhost:3000');
});
