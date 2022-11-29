export function formula(x) {
  Number.parseInt(x) // Можно и без парса, т.к. при вычислениях он старается преобразовать сам, но на всякий случай
  if (!isNaN(x)) {
    const NUMERATOR = 4 * (x ** 2) + 18 - 23 * x
    const DENOMINATOR = (5 / 9) * x + 18 * ((x ** 3) / 33 * x)
    const ADDITION = x * (15 / 12)
    return +(NUMERATOR / DENOMINATOR + ADDITION).toFixed(4)
  } else {
     return 'Некорректное значение'
  }
}

export function checkEven(x) {
  if (!isNaN(x)) {
    if (x % 2 === 0) return `Число ${x} - четное`
    else return `Число ${x} - нечетное`
  } else return 'Некорректное число'
}

export function maxNumber(a, b, c) {
  const VALID = !(isNaN(+a) || isNaN(+b) || isNaN(+c))
  if (VALID) return Math.max(a, b, c)
  else return 'Некоторые из чисел некорректны'
}