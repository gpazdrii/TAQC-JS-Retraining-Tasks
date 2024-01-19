// 1.
function calcRectangleArea (width, height) {
  if (isNaN(width) || isNaN(height)) throw new Error('Not a number')
  if (width <= 0 || height <= 0) throw new Error('Not a positive number')

  return width * height
}

try {
  const area = calcRectangleArea(23, 45)
  console.log(area)
} catch (exception) {
  console.log(exception)
}

try {
  const area = calcRectangleArea(-23, 45)
  console.log(area)
} catch (exception) {
  console.log(exception)
}

try {
  const area = calcRectangleArea()
  console.log(area)
} catch (exception) {
  console.log(exception)
}

try {
  const area = calcRectangleArea(23, '45jk')
  console.log(area)
} catch (exception) {
  console.log(exception)
}

// 2.
function getUser (id) {
  if (id < 0) throw new Error('Received a negative id')

  return { id }
}

function getUsers (userIds) {
  return userIds.map((id) => getUser(id))
}

try {
  const userId = getUser(23)
  console.log(userId)
} catch (exception) {
  console.log(exception.message)
}

try {
  const userId = getUser(-23)
  console.log(userId)
} catch (exception) {
  console.log(exception.message)
}

try {
  const users = getUsers([1, 3, 4])
  console.log(users)
} catch (exception) {
  console.log(exception.message)
}

try {
  const users = getUsers([1, -3, 4])
  console.log(users)
} catch (exception) {
  console.log(exception.message)
}

// 3.
class MonthException extends Error {
  constructor (message) {
    super()
    this.name = 'MonthException'
    this.message = message
  }
}

function showMonthName (month) {
  if (month > 13 || month < 1) throw new MonthException('Incorrect month number, use 1 - 12 numbers')
  if (isNaN(month)) throw new MonthException('Incorrect month number, use numbers only')

  const date = new Date()
  date.setMonth(month - 1)
  return date.toLocaleDateString('en-us', { month: 'long' })
}

try {
  const monthNumber = showMonthName(4)
  console.log(monthNumber)
} catch (exception) {
  console.log(exception.name, exception.message)
}

try {
  const monthNumber = showMonthName(-12)
  console.log(monthNumber)
} catch (exception) {
  console.log(exception.name, exception.message)
}

try {
  const monthNumber = showMonthName('re')
  console.log(monthNumber)
} catch (exception) {
  console.log(exception.name, exception.message)
}
