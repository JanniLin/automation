import { NumbersValidator } from "../../app/numbers_validator.js";
import { expect } from "chai";

describe('isInteger tests', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should return true when provided an integer', () => {
    const validatorResults = validator.isInteger(4);
    expect(validatorResults).to.be.equal(true);
  });

  it('should return false when provided a floating point number', () => {
    const validatorResults = validator.isInteger(4.5);
    expect(validatorResults).to.be.equal(false);
  });

  it('should throw an error when provided a non-number input', () => {
    expect(() => {
      validator.isInteger("not a number");
    }).to.throw(`[not a number] is not a number`);
  })
})
