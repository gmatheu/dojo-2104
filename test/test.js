var assert = require('assert')
var should = require('should');
var fizzBuzz = require('../lib/fizzBuzz');

describe('FizzBuzz', function() {
  describe('#process', function() {
      it('should return same input', function() {
        fizzBuzz.process(1).should.eql([1]);
      })

      it('when input is 3 return Fizz', function() {
        fizzBuzz.process(3).should.eql([1,2,"Fizz"]);
      })
    })
})
