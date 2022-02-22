const axios = require('axios');

const handleRequestAPI = (word, res) => {
  axios
    .get(`https://imsea.herokuapp.com/api/1?q=${word}`)
    .then((response) => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(JSON.stringify(response.data));
    })
    .catch(() => {
      res.writeHead(500);
      res.end('Error!!');
    });
};

module.exports = handleRequestAPI;
