function calcArrProduct (arr) {
  return new Promise((resolve, reject) => {
    if (isEveryElementNumber(arr)) resolve(arr.reduce((res, current) => res * current, 1))
    reject(new Error('Error! Incorrect array!'))
  })
}

function isEveryElementNumber (arr) {
  return arr.every(el => typeof el === 'number' && !Number.isNaN(Number(el)))
}

calcArrProduct([1, 8, 'j']).then((result) => console.log(result)).catch((error) => console.log(error))
calcArrProduct([1, 6, 8, 8, 7]).then((result) => console.log(result)).catch((error) => console.log(error))
