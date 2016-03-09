export function parse (url) {
  var tmp = url.split('/');
  return {
    path : tmp[0], 
    option : tmp[1]
  };
};