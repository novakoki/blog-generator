import * as ajax from './ajax';
var article = document.querySelector('article');
var recent = ['Hello', 'Hi', 'My-Wildlife-Worries'];

export function handler (request) {
  article.innerHTML = '';
  for (var name of recent) {
    var post = document.createElement('a');
    post.className = 'post';
    post.href = `#post/${name}`;
    ajax.get(`posts/${name}.html`,  (function (postCopy) {
      return function (response) {      
        var html = response.substr(0, 300);
        postCopy.innerHTML = html.length < 300 ? html : html + '...';
        article.appendChild(postCopy);
      };
    })(post));
  }
};