const http = require('http').createServer();
const io = require('socket.io')(http);

http.listen(3000);

let count = 0;

io.on('connection', socket => {
	console.log('new user');

	count++;

	io.emit('newUser', count);

	socket.on('changeColor', color => {
		socket.broadcast.emit('changeColor', color);
	});

	socket.on('disconnect', () => {
		count--;
		io.emit('disUser', count);
		console.log('user disconnected');
	})
});
