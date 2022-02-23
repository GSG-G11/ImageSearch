/* eslint-disable no-undef */
getData('Get', '/home', getPicsumImages, displayLoad);

/* eslint-disable no-undef */
const searchBtn = document.getElementById('searchBtn');
searchInput.addEventListener('keyup', (e) => {
  autoList.textContent = '';
  getData('Get', '/auto', manipulateDOM, displayLoad);
  if (searchInput.value !== '' && e.key === 'Enter') {
    getData('Get', `/search/${searchInput.value}`, getImages, displayLoad);
  }
});

searchBtn.addEventListener('click', () => { if (searchInput.value !== '') getData('Get', `/search/${searchInput.value}`, getImages, displayLoad); });
