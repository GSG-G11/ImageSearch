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

searchBtn.addEventListener('click', () => {
  if (searchInput.value !== '') getData('Get', `/search/${searchInput.value}`, getImages, displayLoad);
});

document.addEventListener('click', (e) => {
  if (e.target.getAttribute('class') === 'tag') getData('Get', `/search/${e.target.textContent}`, getImages, displayLoad);
});

const themes = document.getElementById('themes');
const themesLabel = document.getElementById('themesLabel');
const switchTheme = () => {
  const dataTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = dataTheme === 'Dark' ? 'Light' : 'Dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  themesLabel.textContent = newTheme;
};

themes.addEventListener('click', switchTheme);

// Scroll to top button
const scrollToTopBtn = document.querySelector('#scrollToTopBtn');
const displayScrollToBtn = () => {
  const y = window.scrollY;
  if (y > 200) scrollToTopBtn.classList.replace('hide', 'show');
  else scrollToTopBtn.classList.replace('show', 'hide');
};
window.addEventListener('scroll', displayScrollToBtn);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
};
scrollToTopBtn.addEventListener('click', scrollToTop);
