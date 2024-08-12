import { NumbersValidator } from "../../app/numbers_validator.js";
import { expect } from "chai";

describe('isAllNumbers', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });
  it('should return true when all elements in the array are numbers', () => {
        const validatorResults = validator.isAllNumbers([1, 2, 3, 4, 5]);
        expect(validatorResults).to.be.equal(true);
      });

      it('should return false when at least one element in the array is not a number', () => {
        const validatorResults = validator.isAllNumbers([1, 2, "three", 4]);
        expect(validatorResults).to.be.equal(false);
      });

      it('should throw an error when provided a non-array input', () => {
        expect(() => {
          validator.isAllNumbers("not an array");
        }).to.throw(`[not an array] is not an array`);
      });
    });