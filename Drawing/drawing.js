const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

let isDrawing = false,
brushWidth = 10;

window.addEventListener('load', () => { // 初始化画布尺寸
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
})

const startDrawing = () => {
  isDrawing = true;
  ctx.beginPath(); // 开始一个新路径
  ctx.lineWidth = brushWidth;
}

const drawing = (e) => {
  debugger
  if (!isDrawing) return 
  ctx.lineTo(e.offsetX, e.offsetY) // 创建路径列表
  ctx.stroke() // 填充路径
}

canvas.addEventListener('mousedown', startDrawing)
canvas.addEventListener('mousemove', drawing)
canvas.addEventListener('mouseup', () => isDrawing = false)
