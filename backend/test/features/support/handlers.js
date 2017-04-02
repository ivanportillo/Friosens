const { defineSupportCode } = require('cucumber');

defineSupportCode(({ registerHandler }) => {
  registerHandler('BeforeFeatures', (features, done) => {
    require('../../../index'); //START SERVER
    done();
  });
});
