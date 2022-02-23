const handlePublic = require('./handlePublic');

const notFoundHandler = (response) => {
  handlePublic('notFound.html', response, 404);
};

module.exports = notFoundHandler;
