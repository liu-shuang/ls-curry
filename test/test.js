import { currying, uncurrying } from '../index';
import chai from 'chai';

const expect = chai.expect;

describe('Curry Unit-Test', () => {
  describe('currying test1', () => {
    const add = (...xs) => xs.reduce( (x,y) => x + y );
    it('add(1,2,3,4) should be equal to currying(add)(1)(2)(3)(4)()()', () => {
      expect(add(1,2,3,4)).to.be.equal(currying(add)(1)(2)(3)(4)()());
    });
    it('add(1,2,3,4) should be equal to currying(add)(1,2)(3)(4)()()', () => {
      expect(add(1,2,3,4)).to.be.equal(currying(add)(1,2)(3)(4)()());
    });
    it('add(1,2,3,4) should be equal to currying(add,1,2)(3)(4)()()', () => {
      expect(add(1,2,3,4)).to.be.equal(currying(add,1,2)(3)(4)()());
    });
    it('add(1,2,3,4) should be equal to currying(add)(1)(2)()(3,4)', () => {
      expect(add(1,2,3,4)).to.be.equal(currying(add)(1)(2)()(3,4));
    });
  });

  describe('uncurrying test1', () => {
    const add = (...xs) => xs.reduce( (x,y) => x + y );
    it('add(1) should be equal to uncurrying(currying(add))(1)()()', () => {
      expect(add(1)).to.be.equal(uncurrying(currying(add))(1)()());
    });
    it('add(1,2,3,4) should be equal to uncurrying(currying(add))(1,2,3,4)()()', () => {
      expect(add(1,2,3,4)).to.be.equal(uncurrying(currying(add))(1,2,3,4)()());
    });
  });
  describe('uncurrying test2', () => {
    const add = a => b => c => d => a + b + c + d;
    it('add(1)(2)(3)(4) should be equal to uncurrying(add)(1,2,3,4)', () => {
      expect(add(1)(2)(3)(4)).to.be.equal(uncurrying(add)(1,2,3,4));
    });
  });
});
