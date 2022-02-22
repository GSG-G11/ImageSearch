const autoList = document.getElementById('autoList');

const manipulateDOM = (categoriesArray) => {
  categoriesArray.forEach((ele) => {
    const item = document.createElement("li");
    item.textContent = ele;
    autoList.appendChild(item);
  });
};
