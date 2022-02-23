const handleFile = require('./handler/handleFile');
const handlePublic = require('./handler/handlePublic');
const handleRequestAPI = require('./handler/handleRequestAPI');
const notFoundHandler = require('./handler/notFoundHandler');

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
  } else if (endpoint.includes('search')) {
    const searchValue = request.url.split('search/')[1];
    handleRequestAPI(searchValue, response);
  } else {
    notFoundHandler(response);
  }
};

module.exports = router;
