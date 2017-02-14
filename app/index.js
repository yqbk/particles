import { test } from './test'
import _ from 'lodash'

const canvas = document.getElementById('root') // eslint-disable-line
const ctx = canvas.getContext('2d')

const width = window.innerWidth; // eslint-disable-line
const height = window.innerHeight; // eslint-disable-line

ctx.canvas.width = width
ctx.canvas.height = height

ctx.imageSmoothingEnabled = true
ctx.strokeStyle = '#ff8ea8'
ctx.lineWidth = 3


class Circle {
  constructor ({ id, x, y, size, direction }) {
    this.id = id
    this.x = x
    this.y = y
    this.size = size
    this.direction = direction
  }

  move () {
    const moveX = this.direction.dirX
    const moveY = this.direction.dirY

    if (this.x + moveX + this.size >= width || (this.x + moveX) - this.size <= 0) {
      this.direction.dirX = -this.direction.dirX
    }
    this.x += moveX

    if (this.y + moveY + this.size >= height || (this.y + moveY) - this.size <= 0) {
      this.direction.dirY = -this.direction.dirY
    }
    this.y += moveY
  }

  render (c, context) {
    context.beginPath()
    context.arc(this.x, this.y, this.size, 0, 2 * Math.PI)
    context.stroke()
  }
}

const grid = _.range(0, 30).map(number => new Circle({
  id: number,
  x: Math.floor((Math.random() * 1000) + 50),
  y: Math.floor((Math.random() * 1000) + 50),
  size: Math.floor((Math.random() * 10) + 5),
  direction: { dirX: 1, dirY: 0 }
}))

grid[3].direction = { dirX: 1, dirY: 1 }

grid[5].direction = { dirX: 0, dirY: -2 }

grid[7].direction = { dirX: 0, dirY: 0 }


function animate () {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  grid.forEach((circle) => {
    console.log(circle)
    circle.move()
    circle.render(canvas, ctx)
  })
}

// animate()

window.setInterval( () => { // eslint-disable-line
  animate()
  // console.log(movement)
}, 10)
