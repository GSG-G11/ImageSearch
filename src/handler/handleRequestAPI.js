const axios = require('axios');
const serverError = require('./serverError');

const handleRequestAPI = (word, res) => {
  axios
    .get(`https://imsea.herokuapp.com/api/1?q=${word}`)
    .then((response) => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(JSON.stringify(response.data));
    })
    .catch(() => {
      serverError(res);
    });
};

module.exports = handleRequestAPI;
