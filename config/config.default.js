'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1519887194138_3450';
  // add your config here
  config.middleware = [];
  config.mongodb = 'mongodb://127.0.0.1/node_club_test';

  return config;
}
;
