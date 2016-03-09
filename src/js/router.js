import * as home from './home';
import * as post from './post';

var rules = {
  "": home.handler,
  "#post": post.handler
}

export function route (request) {
  var path = request.path;
  
  if (rules[path]) {
    rules[path](request);
  }
  else {
    alert(404);
  }
}
