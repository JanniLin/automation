import { NumbersValidator } from "../../app/numbers_validator.js";
import { expect } from "chai";

describe('getEvenNumbersFromArray tests', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });


    it('should return an array of even numbers', () => {
      const validatorResults = validator.getEvenNumbersFromArray([1, 2, 3, 4, 5, 6]);
      expect(validatorResults).to.deep.equal([2, 4, 6]);
    });

    it('should return an empty array when no even numbers are present', () => {
      const validatorResults = validator.getEvenNumbersFromArray([1, 3, 5]);
      expect(validatorResults).to.deep.equal([]);
    });

    it('should throw an error when provided a non-array input', () => {
      expect(() => {
        validator.getEvenNumbersFromArray("not an array");
      }).to.throw(`[not an array] is not an array of "Numbers"`);
    });

    it('should throw an error when provided an array with non-number elements', () => {
      expect(() => {
        validator.getEvenNumbersFromArray([1, "two", 3]);
      }).to.throw(`[1,two,3] is not an array of "Numbers"`);
    });
  })