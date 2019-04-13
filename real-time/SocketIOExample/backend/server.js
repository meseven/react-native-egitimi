const http = require('http').createServer();
const io = require('socket.io')(http);

http.listen(3000);

let count = 0;
let activeColor = '#f1f1f1';

io.on('connection', socket => {
	console.log('new user');

	count++;

	socket.emit('changeColor', activeColor);
	io.emit('newUser', count);

	socket.on('changeColor', color => {
		activeColor = color;
		socket.broadcast.emit('changeColor', color);
	});

	socket.on('disconnect', () => {
		count--;
		io.emit('disUser', count);
		console.log('user disconnected');
	})
});
