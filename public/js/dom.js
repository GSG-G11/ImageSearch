const autoList = document.getElementById('autoList');
const searchInput = document.getElementById('searchInput');

const searchAuto = (categoriesArray) => {
  const searchList = categoriesArray.filter((item) => (item.toLowerCase().trim()).includes(searchInput.value.toLowerCase().trim()));
  return searchList;
};

const manipulateDOM = (categoriesArray) => {
  if (searchAuto(categoriesArray).length) {
    autoList.textContent = '';
    searchAuto(categoriesArray).forEach((ele) => {
      const item = document.createElement('li');
      item.addEventListener('click', () => { addToSearch(item) })
      item.textContent = ele;
      autoList.appendChild(item);
    });
  }
  if (searchInput.value === '') {
    autoList.textContent = '';
  }
};

const addToSearch = (item) => {
  searchInput.value = item.textContent;
  autoList.textContent = '';
}
