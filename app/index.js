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

function detectCollision (c1, c2) {
  const a = (c1.x + c1.direction.dirX) - (c2.x + c2.direction.dirX)
  const b = (c1.y + c1.direction.dirY) - (c2.y + c2.direction.dirY)
  const distance = Math.sqrt((a * a) + (b * b))

  return distance <= c1.radius + c2.radius
}


class Circle {
  constructor ({ id, x, y, radius, direction }) {
    this.id = id
    this.x = x
    this.y = y
    this.radius = radius
    this.direction = direction
  }

  changeDirectionX() {
    this.direction.dirX = -this.direction.dirX
  }

  changeDirectionY() {
    this.direction.dirY = -this.direction.dirY
  }

  move (grid) {
    const moveX = this.direction.dirX
    const moveY = this.direction.dirY

    this.id === 0 ? console.log(this.direction.dirX) : null

    // change direction in case of collision of any circle
    grid.forEach((circle) => {
      if (circle !== this) {
        if (detectCollision(circle, this)) {
            this.changeDirectionX()
            this.changeDirectionY()
        }
      }
    })

    if (this.x + moveX + this.radius >= width || (this.x + moveX) - this.radius <= 0) {
      this.changeDirectionX()
    }
    this.x += moveX

    if (this.y + moveY + this.radius >= height || (this.y + moveY) - this.radius <= 0) {
      this.changeDirectionY()
    }
    this.y += moveY
  }

  render (c, context) {
    context.beginPath()
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
    context.stroke()
  }
}


// const grid = []

const grid = _.range(0, 30).map(number => new Circle({
  id: number,
  x: Math.floor((Math.random() * 1000) + 50),
  y: Math.floor((Math.random() * 1000) + 50),
  radius: Math.floor((Math.random() * 10) + 5),
  direction: { dirX: (Math.random() * 2), dirY: (Math.random() * 2) }
}))

// grid[0] = new Circle({ id:0,
//             x: 100,
//             y: 100,
//             radius: 30,
//             direction: { dirX: 1, dirY: 0 } })
//
// grid[1] = new Circle({ id: 1,
//             x: 170,
//             y: 100,
//             radius: 30,
//             direction: { dirX: -1, dirY: 0 } })



function animate () {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  // console.log(grid[0])

  // grid[0].move(grid)
  // grid[0].render(canvas, ctx)
  //
  // grid[1].move(grid)
  // grid[1].render(canvas, ctx)

  grid.forEach((circle) => {
    // console.log(circle)
    circle.move(grid)
    circle.render(canvas, ctx)
  })
}

// animate()

window.setInterval( () => { // eslint-disable-line
  animate()
  // console.log(movement)
}, 10)
