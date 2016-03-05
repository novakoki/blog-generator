var route_table = require('./route_table.json');
var router = Object.keys(route_table);
var recent = document.querySelector('#recent').querySelector('ul');
var article = document.querySelector('article');
var recent_html = "";
for (var i = 0; i < (router.length < 5 ? router.length : 5); i++) {
  recent_html += '<li><a href="#' + router[i] +'">'+ router[i]+ '</a></li>';
}
recent.innerHTML = recent_html;

window.onload = getArticle;
window.onhashchange = getArticle;

function getArticle() {
  article.innerHTML = "";
  var hash = location.hash.substr(1);
  if (router.indexOf(hash) != -1){
    get('posts/'+hash+'.html', function (res) {
      article.innerHTML = res;
    });
  }
  else {
    for (var i = 0; i < (router.length < 5 ? router.length : 5); i++) {
      var post = document.createElement('a');
      post.className = "post";
      post.href = '#' + router[i];
      get('posts/'+router[i]+'.html', (function (postCopy) {
          return function (res) {
            var post_content = res.substr(0, 500);
            if (post_content.length == 500) {
              post_content += '...';
            }
            postCopy.innerHTML = post_content;
            article.appendChild(postCopy);
        }
      })(post));
    }
  }
}

function get(url, callback) {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        callback(httpRequest.responseText);
      }
      else {
        console.debug('There was a problem with the request.');
      }
    }
  };
  httpRequest.open('GET', url);
  httpRequest.send();
}