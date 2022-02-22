const searchBtn = document.getElementById('searchBtn');
searchInput.addEventListener('keyup', () => { getData('Get', '/auto', manipulateDOM); });
searchBtn.addEventListener('click', () => { getData('Get', `/search/${searchInput.value}`, getImages); });
