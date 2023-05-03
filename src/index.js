const http = require('http');
const path = require('path');

const express = require ('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio.listener = (server);

// Settings 

app.set('port', process.env.PORT || 3000);

require('./sockets')(io);

// Enviar archivos estaticos
app.use(express.static(path.join(__dirname , 'public')));


// Empezar el servidor 
server.listen(app.get('port'), () => {
    console.log('Servidor activo en puerto', app.get('port'));
});