const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

let ticketCounter = 0;
const queue = [];
const currentTickets = { box1: null, box2: null };

app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'));
app.get('/box1', (req, res) => res.sendFile(__dirname + '/public/box1.html'));
app.get('/box2', (req, res) => res.sendFile(__dirname + '/public/box2.html'));
app.get('/totem', (req, res) => res.sendFile(__dirname + '/public/totem.html'));

io.on('connection', (socket) => {
  socket.emit('updateQueue', queue);
  socket.emit('ticketCalled', currentTickets, queue);

  socket.on('newTicket', () => {
    ticketCounter++;
    const newTicket = { number: ticketCounter };
    queue.push(newTicket);
    io.emit('updateQueue', queue);
  });

  
  socket.on('callTicket', (box) => {
    if (queue.length > 0) {
      currentTickets[box] = queue.shift();
      io.emit('ticketCalled', currentTickets, queue);
    }
  });
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
