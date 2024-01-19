// 1.
function createArray (start, end) {
  const arr = []
  for (let i = start; i <= end; i++) { arr.push(i) }
  return arr
}

console.log(createArray(12, 16))

// 2.
function getNumbers (a, b) {
  const arr = []
  for (let i = a; i <= b; i++) {
    for (let k = 0; k < i; k++) {
      arr.push(i)
    }
  }
  return arr.join()
}

console.log(getNumbers(2, 4))

// 3.
const compact = function (arr) {
  return [...new Set(arr)]
}

console.log(compact([5, 1, 1, 2, 3, 4, 4, 5]))

function compact2 (arr) {
  const uniqueArr = [arr[0]]
  for (let i = 1; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) uniqueArr.push(arr[i])
  }
  return uniqueArr
}
console.log(compact2([5, 1, 1, 2, 3, 4, 4, 5]))
