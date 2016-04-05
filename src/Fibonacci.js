'use strict';
require('babel-polyfill');

function * fibonacci () {
  let pre = 0, cur = 1;
  yield pre;
  yield cur;
  for (;;) {
    [pre, cur] = [cur, pre + cur];
    yield cur;
  }
}

module.exports = function (n) {
  var f = fibonacci();
  for (var i = 0; i < n; i++) {
    f.next();
  }
  return f.next().value;
};
