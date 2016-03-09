import * as ajax from './ajax';
var article = document.querySelector('article');

export function handler(request) {
  ajax.get(`posts/${request.option}.html`, function (response) {
    article.innerHTML = response;
  });
};