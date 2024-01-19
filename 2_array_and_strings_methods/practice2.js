// 1.
console.log('ARRAYS')
// 1.
const arr = []
for (let i = 0; i < 20; i++) { arr.push(Math.floor(Math.random() * 100) + 1) }

// 2.
arr.forEach((el, index) => console.log(`[${index + 1}] - ${el}`))

// 3.
const mult7 = arr.some((el) => el % 7 === 0)
console.log('Is multiple  of 7: ' + mult7)

// 4.
arr.sort((a, b) => b - a)
console.log(arr)

// 5.
arr.fill(0, arr.length / 2)
console.log(arr)

// 6.
arr.splice(0, 3)
console.log(arr)

// 7.
const hasDups = arr.some((a, i) => arr.includes(a, i + 1))
console.log('Has duplicates: ' + hasDups)

// 8.
const newArr = arr.slice((arr.length / 2) - 1)
console.log(newArr)

// 9.
const evenElements = arr.filter((el) => el % 2 === 0)
console.log(evenElements.length)

// 2.
console.log('STRINGS')
// 1.
const str = 'Hello world here! This is  JS'
const res = [...str.matchAll(/ /g)].length
console.log(res)

// 2.
function setToUpperCase (str) {
  return str[0].toUpperCase() + str.slice(1)
}
console.log(setToUpperCase('this is a string'))

// 3.
const userStr = 'This is my words to   count'
const wordsCount = userStr.trim().replace(/\s+/g, ' ').split(' ').length
console.log(wordsCount)

// 4.
function toAbbr (str) {
  const words = str.trim().replace(/\s+/g, ' ').split(' ')
  const includeHyphen = words.map((w) => w.includes('-') ? w.split('-') : w)
  return includeHyphen.flat().reduce((res, current) => res += current[0].toUpperCase(), '')
}
console.log(toAbbr('object-oriented programming'))

// 5.
function isPalindrome (str) {
  const backwordStr = str.split('').reverse().join('')
  return str === backwordStr
}

console.log(isPalindrome('anna'))
console.log(isPalindrome('hello'))

// 6.
function parseUrl (url) {
  const splittedUrl = url.split('//')

  const protocol = splittedUrl[0].replace(':', '')
  const domainEndIndex = splittedUrl[1].indexOf('/')
  const domain = splittedUrl[1].slice(0, domainEndIndex)
  const path = splittedUrl[1].slice(domainEndIndex + 1)

  console.log('protocol: ' + protocol)
  console.log('domain: ' + domain)
  console.log('path: ' + path)
}

parseUrl('https://ddfdf.ssdfsdf.com/kjkjkj/dfdf/fdfdf')
