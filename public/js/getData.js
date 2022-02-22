function getData(method, url, cb) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    try {
      if (xhr.readyState === 4 && xhr.status === 200) {
        cb(JSON.parse(xhr.responseText));
      }
    } catch (error) {
      return error;
    }
  };
  xhr.open(method, url);
  xhr.send();
}
