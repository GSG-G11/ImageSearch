const http = require('http');
const router = require('./router');

const server = http.createServer(router);
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;

// eslint-disable-next-line no-console
server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
