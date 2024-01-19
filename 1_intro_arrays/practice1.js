// Task 1
const dataTypes = {
  string: 'This is a string',
  number: 123,
  boolean: true,
  undefined,
  null: null,
  bigInt: BigInt(9007199254740991)
}

// Task 2
const secH = 60 * 60
const secD = secH * 24
const secM = secD * 30

console.log(secH)
console.log(secD)
console.log(secM)

// Task 3
const arr = [1, 3, 5, 6, 7, 13, 26, 25, 8, 12, 95]

const primeNumber = numsArr => {
  const result = numsArr.filter(function (item) {
    return item % 3 === 0 || item % 5 === 0 || item % 7 === 0 || item % 11 === 0 || item % 13 === 0
  })

  return result
}

console.log(primeNumber(arr))

// Task 4
const triangleArea = (a, b, c) => {
  let area = 0

  if (a + b > c || a + c > b || b + c > a) {
    const s = (a + b + c) / 2
    area = Math.sqrt(s * (s - a) * (s - b) * (s - c))
  } else {
    console.log('Incorrect data')
  }
  return area.toFixed(3)
}

console.log(triangleArea(6, 10, 15))

// Task 5
const arrToCheck = [5, 1, 4, 1, 3, 5, 5, 2, 3, 5, 2]

const filterMostOftenNumber = numsArr => {
  let oftenNumber
  let occurences = 0

  for (let i = 0; i < numsArr.length; i++) {
    const num = numsArr.filter((item) => { return item === numsArr[i] })

    if (num.length > occurences) {
      oftenNumber = numsArr[i]
      occurences = num.length
    }
  }

  const newArr = [oftenNumber]
  const filteredArray = numsArr.filter((el) => { return el !== oftenNumber })

  return filteredArray
}

console.log(filterMostOftenNumber(arrToCheck))
