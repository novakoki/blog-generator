export function get (url, success, error) {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = () => {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        success(httpRequest.responseText);
      }
      else {
        error();
      }
    }
  };
  httpRequest.open('GET', url);
  httpRequest.send();
};