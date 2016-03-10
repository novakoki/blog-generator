export function start (handler) {
  window.onload = handler;
  window.onhashchange = handler;
};

export function stop () {
  window.onhashchange = null;
};
