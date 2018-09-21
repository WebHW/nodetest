'use strict';

/**
 * @param {Egg.Application} app -egg application
 */

module.exports = app => {
  const { router, controller, middleware } = app;
  // home page
  router.get('/', middleware.authUser(), controller.site.index);
  return;
  // sitemap
  // router.get('/sitemap.xml', controller.site.sitemap);
};
