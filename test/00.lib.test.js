require('should');

const lib = require('../lib');

describe('The lib', () => {

  it('should be there', () => {
    lib.should.be.Object();
    lib.should.have.property('notEmptyObject').which.is.Function();
    lib.should.have.property('notObjectOrIsEmpty').which.is.Function();
  });

  describe('The not empty object shortcut', () => {

    it('can check an object', () => {
      lib.notEmptyObject({
        lorem: true
      }).should.equal(true);
    });

    it('can check an object', () => {
      lib.notEmptyObject({}).should.equal(false);
    });

    it('can check an instance', () => {
      const Lorem = function() {};
      Lorem.prototype.method = function() {};
      Lorem.prototype.value = 'lorem';
      const lorem = new Lorem();
      lorem.ipsum = true;
      lib.notEmptyObject(lorem).should.equal(true);
    });

    it('can check an instance', () => {
      const Lorem = function() {};
      Lorem.prototype.method = function() {};
      Lorem.prototype.value = 'lorem';
      lib.notEmptyObject(new Lorem()).should.equal(false);
    });

    it('can check an array', () => {
      lib.notEmptyObject(['lorem']).should.equal(true);
    });

    it('can check an array', () => {
      lib.notEmptyObject([]).should.equal(false);
    });

    it('can check a function', () => {
      const lorem = function() {};
      lorem.ipsum = true;
      lib.notEmptyObject(lorem).should.equal(false);
    });

    it('can check a function', () => {
      lib.notEmptyObject(function() {}).should.equal(false);
    });

    it('can check a string', () => {
      lib.notEmptyObject('lorem').should.equal(false);
    });

    it('can check a string', () => {
      lib.notEmptyObject('').should.equal(false);
    });

    it('can check a number', () => {
      lib.notEmptyObject(1).should.equal(false);
    });

    it('can check a number', () => {
      lib.notEmptyObject(0).should.equal(false);
    });

    it('can check a boolean', () => {
      lib.notEmptyObject(true).should.equal(false);
    });

    it('can check a boolean', () => {
      lib.notEmptyObject(false).should.equal(false);
    });

    it('can check a null', () => {
      lib.notEmptyObject(null).should.equal(false);
    });

    it('can check a nothing', () => {
      lib.notEmptyObject().should.equal(false);
    });

  });

  describe('The not object or is empty shortcut', () => {

    it('can check an object', () => {
      lib.notObjectOrIsEmpty({
        lorem: true
      }).should.equal(false);
    });

    it('can check an object', () => {
      lib.notObjectOrIsEmpty({}).should.equal(true);
    });

    it('can check an instance', () => {
      const Lorem = function() {};
      Lorem.prototype.method = function() {};
      Lorem.prototype.value = 'lorem';
      const lorem = new Lorem();
      lorem.ipsum = true;
      lib.notObjectOrIsEmpty(lorem).should.equal(false);
    });

    it('can check an instance', () => {
      const Lorem = function() {};
      Lorem.prototype.method = function() {};
      Lorem.prototype.value = 'lorem';
      lib.notObjectOrIsEmpty(new Lorem()).should.equal(true);
    });

    it('can check an array', () => {
      lib.notObjectOrIsEmpty(['lorem']).should.equal(false);
    });

    it('can check an array', () => {
      lib.notObjectOrIsEmpty([]).should.equal(true);
    });

    it('can check a function', () => {
      const lorem = function() {};
      lorem.ipsum = true;
      lib.notObjectOrIsEmpty(lorem).should.equal(true);
    });

    it('can check a function', () => {
      lib.notObjectOrIsEmpty(function() {}).should.equal(true);
    });

    it('can check a string', () => {
      lib.notObjectOrIsEmpty('lorem').should.equal(true);
    });

    it('can check a string', () => {
      lib.notObjectOrIsEmpty('').should.equal(true);
    });

    it('can check a number', () => {
      lib.notObjectOrIsEmpty(1).should.equal(true);
    });

    it('can check a number', () => {
      lib.notObjectOrIsEmpty(0).should.equal(true);
    });

    it('can check a boolean', () => {
      lib.notObjectOrIsEmpty(true).should.equal(true);
    });

    it('can check a boolean', () => {
      lib.notObjectOrIsEmpty(false).should.equal(true);
    });

    it('can check a null', () => {
      lib.notObjectOrIsEmpty(null).should.equal(true);
    });

    it('can check a nothing', () => {
      lib.notObjectOrIsEmpty().should.equal(true);
    });

  });

});
