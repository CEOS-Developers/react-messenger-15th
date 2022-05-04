const httpServer = require('http').createServer();
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
});

httpServer.listen(3065, () => {
  `API server is listening `;
});
