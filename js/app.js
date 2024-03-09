const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const size = 20
const time = 100

const c1 = "#93827C"
const c2 = "#79645C"
const gridLineWidth = 0.5
const gridColor = 'blue'
const grind = true
let idTimer
let dir

const randNumber = ()=> {
    return Math.round(Math.random() * (max - min) + min)
}

const snake = [
    {x:280, y:280},
    {x:300, y:280}
]

const food = {
    x: 80, y:80, color: '#B70E0E'
}

const drawFood = () => {
    const {x, y, color} = food
    ctx.shadowColor = color
    ctx.shadowBlur = 10
    ctx.fillStyle = color
    ctx.fillRect(x,y,size,size)
    ctx.shadowBlur = 0

}

const drawSnake = () => { 
    snake.forEach((e, k)=>{
        if(k == snake.length -1){
            ctx.fillStyle= c1
        }
        else{
            ctx.fillStyle= c2
        }
        ctx.fillRect(e.x, e.y, size, size)
    })
}

const moveSnake = () => {
    if(!dir){return}  
    const head = snake[snake.length -1]

    if (dir == 'right'){
        snake.push({x: head.x + size, y: head.y})
    }    
    if (dir == 'left'){
        snake.push({x: head.x - size, y: head.y})
    }    
    if (dir == 'down'){
        snake.push({x: head.x, y: head.y  + size})
    }    
    if (dir == 'up'){
        snake.push({x: head.x, y: head.y - size})
    }
    snake.shift()
}
const gameLoop = ()=>{
    ctx.clearRect(0,0,600,600)
    moveSnake()
    drawSnake()
    drawFood()
    if(grind){drawGrind()}
    idTimer = setTimeout(()=>{gameLoop()}, time)
}

const drawGrind = ()=>{
    ctx.lineWidth = gridLineWidth
    ctx.strokeStyle = 'blue'

    for(let i = size; i < canvas.width; i += size){
        ctx.beginPath()
        ctx.lineTo(i, 0)
        ctx.lineTo(i, canvas.width)
        ctx.stroke()
    }    
    
    for(let i = size; i < canvas.height; i += size){
        ctx.beginPath()
        ctx.lineTo(0, i)
        ctx.lineTo(canvas.height, i)
        ctx.stroke()
    }

}

document.addEventListener('keydown', ({key})=>{
    if (key == 'w' && dir != "down"){dir = 'up'}  
    if (key == 's' && dir != "up"){dir = 'down'}
    if (key == 'a' && dir != "right"){dir = 'left'}
    if (key == 'd' && dir != "left"){dir = 'right'}
})

gameLoop()
