var expect = require('chai').expect;
var fibonacci = require('../src').Fibonacci;

describe('Fibonacci', function() {
  it('f(0) = 0', function () {
    expect(fibonacci(0)).to.equal(0);
  });

  it('f(1) = 1', function () {
    expect(fibonacci(1)).to.equal(1);
  });

  it('f(2) = 1', function () {
    expect(fibonacci(2)).to.equal(1);
  });

  it('f(3) = 2', function () {
    expect(fibonacci(3)).to.equal(2);
  });

  it('f(4) = 3', function () {
    expect(fibonacci(4)).to.equal(3);
  });

  it('f(5) = 5', function () {
    expect(fibonacci(5)).to.equal(5);
  });

  it('f(6) = 8', function () {
    expect(fibonacci(6)).to.equal(8);
  });
});
