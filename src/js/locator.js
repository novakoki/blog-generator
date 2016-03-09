export function start (handler) {
  window.onhashchange = handler;
};

export function stop () {
  window.onhashchange = null;
};
