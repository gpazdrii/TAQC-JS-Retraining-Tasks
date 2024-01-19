// 1.
class Circle {
  constructor ({ x, y }, radius) {
    this.centerPoint = { x, y }
    this._radius = radius
  }

  static getLengthFromRadius (radius) {
    return 2 * Math.PI * radius
  }

  static createCircle (x, y, r) {
    return new Circle({ x, y }, r)
  }

  getLength () {
    return 2 * Math.PI * this._radius
  }

  getCopy () {
    return Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this))
  }

  checkPointInside ({ x, y }) {
    return Math.pow((x - this.centerPoint.x), 2) + Math.pow((y - this.centerPoint.y), 2) < Math.pow(this.radius, 2)
  }

  toString () {
    return JSON.stringify(this)
  }

  set radius (radius) {
    this._radius = radius
  }

  get radius () {
    return this._radius
  }
}

const circle = new Circle({ x: 14, y: 18 }, 12)
console.log(circle)
console.log(Circle.getLengthFromRadius(12))
console.log(Circle.createCircle(3, 4, 1))
console.log(circle.getLength())
const copy = circle.getCopy()
console.log(copy)
circle.radius = 14
console.log(circle)
console.log(copy)
console.log(circle.checkPointInside({ x: 14, y: 18 }))
console.log(circle.toString())

// 2.
class Marker {
  #markerColor
  #inkAmount = '100%'

  constructor (color) {
    this.#markerColor = color
  }

  get color () {
    return this.#markerColor
  }

  get inkAmount () {
    return this.#inkAmount
  }

  set inkAmount (ink) {
    this.#inkAmount = ink
  }

  print (text) {
    let remainingInkAmount = Number(this.#inkAmount.replace('%', ''))
    let indexOfText = 0

    while (remainingInkAmount > 0 && indexOfText <= text.length - 1) {
      while (text[indexOfText] === ' ') indexOfText += 1

      console.log(text[indexOfText])
      remainingInkAmount -= 10
      indexOfText += 1
    }

    this.#inkAmount = remainingInkAmount
  }
}

const marker = new Marker('red')
console.log(marker.color)
console.log(marker.inkAmount)
marker.print('hello hh')
console.log(marker.inkAmount)

class RefillableMarker extends Marker {
  constructor (color) {
    super(color)
  }

  refillMarker () {
    while (super.inkAmount < 100) super.inkAmount += 10
  }
}

const refillableMarker = new RefillableMarker('green')
console.log(refillableMarker.color)
console.log(refillableMarker.inkAmount)
refillableMarker.print('hello hhsdfdsfsdff')
console.log(refillableMarker.inkAmount)
refillableMarker.refillMarker()
console.log(refillableMarker.inkAmount)
