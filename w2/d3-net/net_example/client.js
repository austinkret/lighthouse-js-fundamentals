const net = require('net');

const client = net.createConnection({
  host: '10.0.0.76',
  port: 3000
});

client.on('connect', () => {
  client.write('Hello from client!');
});

client.on('data', (data) => {
  console.log('Server says: ', data);
});

client.setEncoding('utf8');