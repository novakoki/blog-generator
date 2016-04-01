import * as ajax from './ajax';
var article = document.querySelector('article');

export function handler(request) {
  ajax.get(`posts/${request.option}.html`, response => {
    article.innerHTML = response;
  });
};