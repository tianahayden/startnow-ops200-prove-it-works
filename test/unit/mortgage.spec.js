const expect = require('chai').expect;
const Mortgage = require('../../src/js/lib/Mortgage');

describe('Mortgage Calculator', () => {
    let mortgage = null;

  beforeEach(() => {
    mortgage = new Mortgage();
  });

  it('should have a monthly payment function', () => {
    expect(mortgage.monthlyPayment).to.exist;
  });

  it('should contain principal', () => {
    expect(mortgage.constructor).to.exist;
  });

  it('should calculate monthly interest rate correctly', () => {
    mortgage = new Mortgage(1000, 20, 10, 2)
    expect(mortgage.monthlyPayment(1000, 20, 10, 2)).to.equal(117.45962477254577);
  });

});