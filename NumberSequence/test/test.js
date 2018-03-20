var expect = require('chai').expect;
var app = require('../app.js');

describe('app.calculateSequence()', function () {
  it('should generate sequence and return an Array of 4 Strings', function () {
    var result = app.calculateSequence(5);
    expect(result.length).to.be.equal(4);
  });
});

describe('app.calculateSequence()', function () {
  it('testing first sequence for all numbers for input as 5', function () {

    var result = app.calculateSequence(5);

    expect(result[0]).to.be.equal('1 2 3 4 5');
  });
});

describe('app.calculateSequence()', function () {
  it('testing second sequence for odd numbers for input as 5', function () {

    var result = app.calculateSequence(5);

    expect(result[1]).to.be.equal('1 3 5');
  });
});

describe('app.calculateSequence()', function () {
  it('testing third sequence for even numbers for input as 5', function () {

    var result = app.calculateSequence(5);
    expect(result[2]).to.be.equal('2 4');

  });
});

describe('app.calculateSequence()', function () {
  it('testing fourth sequence for calculated numbers for input as 15', function () {

    var result = app.calculateSequence(15);

    expect(result[3]).to.be.equal('1 2 C 4 E C 7 8 C E 11 C 13 14 Z');
  });
});