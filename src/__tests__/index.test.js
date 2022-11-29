import {formula} from "../index.js";
import {checkEven} from "../index.js";
import {maxNumber} from "../index.js";
import expect from "expect";

describe('test for math calculations', () => {
  it('should be correct number', () => {
    expect(formula('10')).toBe(12.5344)
    expect(formula('13d')).toBe("Некорректное значение")
  }),
    it('check on even/odd number', () => {
      expect(checkEven(20)).toBe('Число 20 - четное')
      expect(checkEven(29)).toBe('Число 29 - нечетное')
      expect(checkEven('asd')).toBe('Некорректное число')
    }),
    it('find max number out of 3 numbers', () => {
      expect(maxNumber(10, 20, 30)).toBe(30)
      expect(maxNumber(10, 20, '30d')).toBe("Некоторые из чисел некорректны")
    })
})