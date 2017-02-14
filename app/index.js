import { test } from './test'
import _ from 'lodash'

const canvas = document.getElementById('root') // eslint-disable-line
const ctx = canvas.getContext('2d')

ctx.canvas.width  = window.innerWidth; // eslint-disable-line
ctx.canvas.height = window.innerHeight; // eslint-disable-line

ctx.imageSmoothingEnabled = true
ctx.strokeStyle = '#ff8ea8'
ctx.lineWidth = 3


// function move (x, y) {
//   ctx.clearRect(0, 0, c.width, c.height)
//
//   ctx.beginPath()
//   ctx.arc(x, y, 50, 0, 2 * Math.PI)
//   ctx.stroke()
//   return { x: x + 1, y: y + 1 }
// }

// const movement = { x: 0, y: 0 }

// window.setInterval( () => { // eslint-disable-line
//   movement = move(movement.x, movement.y)
//   console.log(movement)
// }, 50);


class Circle {
  constructor ({ id, x, y, size }) {
    this.id = id
    this.x = x
    this.y = y
    this.size = size
  }

  render (c, context) {
    // context.clearRect(0, 0, c.width, c.height)

    context.beginPath()
    context.arc(this.x, this.y, this.size, 0, 2 * Math.PI)
    context.stroke()
  }

}

const grid = _.range(0, 10).map(({ id }) => new Circle({
  id,
  x: Math.floor((Math.random() * 1000) + 50),
  y: Math.floor((Math.random() * 1000) + 50),
  size: Math.floor((Math.random() * 15) + 5) }))


grid.forEach((circle) => {
  circle.render(canvas, ctx)
  console.log(circle)
})
