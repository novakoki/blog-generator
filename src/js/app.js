import * as locator from './locator';
import * as router from './router';
import * as url from './url';

locator.start( () => {
  var request = url.parse(location.hash);
  router.route(request);
});
