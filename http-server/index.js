const http = require('http');
const yargs = require('yargs');

// Parse c
// Parse command line arguments using yargs
const argv = yargs
  .option('port', {
    description: 'Port number for the server to listen on',
    type: 'number',
    demandOption: true, // Make the port option required
  })
  .argv;

// Create a simple HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!\n');
});

// Start the server on the specified port
server.listen(argv.port, () => {
  console.log(`Server is listening on port ${argv.port}`);
});