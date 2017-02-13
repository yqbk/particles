import { test } from './test'

const c = document.getElementById('myCanvas') // eslint-disable-line
const ctx = c.getContext('2d')
ctx.beginPath()
ctx.arc(100, 75, 50, 0, 2 * Math.PI)
ctx.stroke()

test()
