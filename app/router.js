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
    router.get('/signup', controller.sign.showSignup); // 跳转到注册页面
    router.post('/signup', controller.sign.signup); // 提交注册信息
  } else {
    // 进行github验证
    router.get('/signup', function(req, res, next) {
      return res.redirect('/auth/github');
    });
  }
};
