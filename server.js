const express = require('express'); 
const app = express(); 
const server = require('http').Server(app); 
const io = require('socket.io')(server);
const { v4: uuidv4 } = require('uuid');
const path = require('path'); 
const { Socket } = require('dgram');


// app.use(express.static('client'));

app.get('/', (req, res) => {
    res.redirect(`/${uuidv4()}`);
})

app.get('/:room', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'room.html'))
})

io.on('connection', Socket => {
    Socket.on('join-room', (roomId, userId) => {
        console.log(roomId, userId)
    })
})


server.listen(3000, () => console.log(`Server running on 3000`))