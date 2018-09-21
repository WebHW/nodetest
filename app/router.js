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
  // sign controller
  if (config.allow_sign_up) {
    router.get('/signup', controller.sign.showSignup); // ��ת��ע��ҳ��
    router.post('/signup', controller.sign.signup); // �ύע����Ϣ
  } else {
    // ����github��֤
    router.get('/signup', function(req, res, next) {
      return res.redirect('/auth/github');
    });
  }
};
