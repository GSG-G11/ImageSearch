/* eslint-disable no-undef */
const searchBtn = document.getElementById('searchBtn');
searchInput.addEventListener('keyup', () => { getData('Get', '/auto', manipulateDOM); });
searchBtn.addEventListener('click', () => { if (searchInput.value !== '') getData('Get', `/search/${searchInput.value}`, getImages); });
