const httpServer = require('http').createServer();
const io = require('socket.io')(httpServer, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

httpServer.listen(3065, () => {
  `API server is listening `;
});
