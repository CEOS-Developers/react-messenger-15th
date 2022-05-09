const express = require('express');
const app = express();
const httpServer = require('http').createServer(app);

app.get('/', (_, res) => {
  res.send('hi');
});

const io = require('socket.io')(httpServer, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});
let sockets = [];
let msgs = [];
io.on('connection', (socket) => {
  socket.join('ceos-15-front');
  sockets.push(socket);
  console.log('connection', socket.rooms, sockets.length);
  socket.on('send', (data) => {
    msgs.push(data);
    io.emit('sendBack', msgs);
  });
  socket.on('disconnect', () => {
    sockets = sockets.filter((id) => id !== socket.id);
  });
});

httpServer.listen(3065, () => {
  `API server is listening `;
});
