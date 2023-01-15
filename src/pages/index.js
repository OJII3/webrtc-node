const peer = new Peer();

const client = peer.connect('test-connection');

client.on('open', () => {
	connect.send('hi!');
});

peer.on("connection", (conn) => {
	conn.on("data", (data) => {
		// Will print 'hi!'
		console.log(data);
	});
	conn.on("open", () => {
		conn.send("hello!");
	});
});