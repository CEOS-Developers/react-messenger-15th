const { Socket } = require('socket.io');

const httpServer = require('http').createServer();
const io = require('socket.io')(httpServer, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log('connection');
});

httpServer.listen(3065, () => {
  `API server is listening `;
});
