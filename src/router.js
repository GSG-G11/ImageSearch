const handleFile = require('./handler/handleFile');
const handlePublic = require('./handler/handlePublic');

const router = (request, response) => {
  const endpoint = request.url;

  if (endpoint === '/') {
    handlePublic('/index.html', response);
  } else if (endpoint === '/style.css') {
    handlePublic(endpoint, response);
  } else if (endpoint === '/js/getData.js' || endpoint === '/js/dom.js' || endpoint === '/js/index.js') {
    handlePublic(endpoint, response);
  } else if (endpoint.includes('auto')) {
    handleFile(response);
  } else {
    response.writeHead(404);
    response.end('Not Found');
  }
};

module.exports = router;
