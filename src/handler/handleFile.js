const path = require('path');
const fs = require('fs');

const handleFile = (response) => {
  const filePath = path.join(__dirname, '..', 'categories.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      response.writeHead(500);
      response.end('error server');
    } else {
      response.writeHead(200, { 'Content-Type': 'application/json' });
      response.end(data);
    }
  });
};

module.exports = handleFile;
