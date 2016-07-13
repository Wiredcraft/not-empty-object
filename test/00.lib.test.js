var should = require('should');

var lib = require('../lib');

describe('The lib', function() {

  it('should be there', function() {
    lib.should.be.Object();
    lib.should.have.property('notEmptyObject').which.is.Function();
    lib.should.have.property('notObjectOrIsEmpty').which.is.Function();
  });

  describe('The not empty object shortcut', function() {

    it('can check an object', function() {
      lib.notEmptyObject({
        lorem: true
      }).should.equal(true);
    });

    it('can check an object', function() {
      lib.notEmptyObject({}).should.equal(false);
    });

    it('can check an instance', function() {
      var Lorem = function() {};
      Lorem.prototype.method = function() {};
      Lorem.prototype.value = 'lorem';
      var lorem = new Lorem();
      lorem.ipsum = true;
      lib.notEmptyObject(lorem).should.equal(true);
    });

    it('can check an instance', function() {
      var Lorem = function() {};
      Lorem.prototype.method = function() {};
      Lorem.prototype.value = 'lorem';
      lib.notEmptyObject(new Lorem()).should.equal(false);
    });

    it('can check an array', function() {
      lib.notEmptyObject(['lorem']).should.equal(true);
    });

    it('can check an array', function() {
      lib.notEmptyObject([]).should.equal(false);
    });

    it('can check a function', function() {
      var lorem = function() {};
      lorem.ipsum = true;
      lib.notEmptyObject(lorem).should.equal(false);
    });

    it('can check a function', function() {
      lib.notEmptyObject(function() {}).should.equal(false);
    });

    it('can check a string', function() {
      lib.notEmptyObject('lorem').should.equal(false);
    });

    it('can check a string', function() {
      lib.notEmptyObject('').should.equal(false);
    });

    it('can check a number', function() {
      lib.notEmptyObject(1).should.equal(false);
    });

    it('can check a number', function() {
      lib.notEmptyObject(0).should.equal(false);
    });

    it('can check a boolean', function() {
      lib.notEmptyObject(true).should.equal(false);
    });

    it('can check a boolean', function() {
      lib.notEmptyObject(false).should.equal(false);
    });

    it('can check a null', function() {
      lib.notEmptyObject(null).should.equal(false);
    });

    it('can check a nothing', function() {
      lib.notEmptyObject().should.equal(false);
    });

  });

  describe('The not object or is empty shortcut', function() {

    it('can check an object', function() {
      lib.notObjectOrIsEmpty({
        lorem: true
      }).should.equal(false);
    });

    it('can check an object', function() {
      lib.notObjectOrIsEmpty({}).should.equal(true);
    });

    it('can check an instance', function() {
      var Lorem = function() {};
      Lorem.prototype.method = function() {};
      Lorem.prototype.value = 'lorem';
      var lorem = new Lorem();
      lorem.ipsum = true;
      lib.notObjectOrIsEmpty(lorem).should.equal(false);
    });

    it('can check an instance', function() {
      var Lorem = function() {};
      Lorem.prototype.method = function() {};
      Lorem.prototype.value = 'lorem';
      lib.notObjectOrIsEmpty(new Lorem()).should.equal(true);
    });

    it('can check an array', function() {
      lib.notObjectOrIsEmpty(['lorem']).should.equal(false);
    });

    it('can check an array', function() {
      lib.notObjectOrIsEmpty([]).should.equal(true);
    });

    it('can check a function', function() {
      var lorem = function() {};
      lorem.ipsum = true;
      lib.notObjectOrIsEmpty(lorem).should.equal(true);
    });

    it('can check a function', function() {
      lib.notObjectOrIsEmpty(function() {}).should.equal(true);
    });

    it('can check a string', function() {
      lib.notObjectOrIsEmpty('lorem').should.equal(true);
    });

    it('can check a string', function() {
      lib.notObjectOrIsEmpty('').should.equal(true);
    });

    it('can check a number', function() {
      lib.notObjectOrIsEmpty(1).should.equal(true);
    });

    it('can check a number', function() {
      lib.notObjectOrIsEmpty(0).should.equal(true);
    });

    it('can check a boolean', function() {
      lib.notObjectOrIsEmpty(true).should.equal(true);
    });

    it('can check a boolean', function() {
      lib.notObjectOrIsEmpty(false).should.equal(true);
    });

    it('can check a null', function() {
      lib.notObjectOrIsEmpty(null).should.equal(true);
    });

    it('can check a nothing', function() {
      lib.notObjectOrIsEmpty().should.equal(true);
    });

  });

});
