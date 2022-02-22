const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('keyup',getData('Get', '/auto', manipulateDOM));