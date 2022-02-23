/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const autoList = document.getElementById('autoList');
const searchInput = document.getElementById('searchInput');
const imageListWrap = document.getElementById('imageListWrap');
const load = document.querySelector('.load');

const displayLoad = () => {
  imageListWrap.textContent = '';
  load.style.display = 'block';
};

const searchAuto = (categoriesArray) => {
  const searchList = categoriesArray
    .filter((item) => (item.toLowerCase().trim()).includes(searchInput.value.toLowerCase().trim()));
  return searchList;
};

const addToSearch = (item) => {
  searchInput.value = item.textContent;
  autoList.textContent = '';
};

const manipulateDOM = (categoriesArray) => {
  if (searchAuto(categoriesArray).length) {
    autoList.textContent = '';
    searchAuto(categoriesArray).forEach((ele) => {
      const item = document.createElement('li');
      item.addEventListener('click', () => { addToSearch(item); });
      item.textContent = ele;
      autoList.appendChild(item);
    });
  }
  if (searchInput.value === '') {
    autoList.textContent = '';
  }
};

const getImages = (data) => {
  imageListWrap.textContent = '';
  data.results.forEach((img, index) => {
    if (index % 2 === 0) {
      const item = document.createElement('li');
      item.className = 'item';
      const imgItem = document.createElement('img');
      imgItem.setAttribute('src', `${img}`);
      item.appendChild(imgItem);

      imageListWrap.appendChild(item);
    }
  });
};

const getPicsumImages = (data) => {
  imageListWrap.textContent = '';
  data.forEach((img) => {
    const item = document.createElement('li');
    item.className = 'item';
    const imgItem = document.createElement('img');
    imgItem.setAttribute('src', `${img.download_url}`);
    item.appendChild(imgItem);
    imageListWrap.appendChild(item);
  });
};
