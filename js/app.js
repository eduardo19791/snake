const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const size = 20
const time = 100
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> d26f5f2aa7b8de1e4530c7492651228588fe17fd
const c1 = "#93827C"
const c2 = "#79645C"
const gridLineWidth = 0.5
const gridColor = 'rgba(255,255,255,0.2)'
const grid = true
let idTimer, dir

const randNumber = (min, max)=> {
    return Math.round(Math.random() * (max - min) + min)
}
<<<<<<< HEAD
=======
const c1 = "#93827C"
const c2 = "#79645C"
const gridLineWidth = 0.5
const gridColor = 'rgba(255,255,255,0.2)'
const grid = true
let idTimer, dir
>>>>>>> 4e13467f7dae991468c380477ba3d43c72537084

const randNumber = (min, max)=> {
    return Math.round(Math.random() * (max - min) + min)
}
=======
>>>>>>> d26f5f2aa7b8de1e4530c7492651228588fe17fd
const food = ()=> {
    const x = randNumber(0, canvas.width - size)
    const y = randNumber(0, canvas.height - size)
    return { x: Math.round(x / size) * size, y: Math.round(y / size) * size, color: "yellow"}
<<<<<<< HEAD
}
const snake = [
<<<<<<< HEAD
    {x:280, y:280},
    {x:300, y:280}
]

const food = {
    x: 80, y:80, color: '#B70E0E'
=======
>>>>>>> d26f5f2aa7b8de1e4530c7492651228588fe17fd
}
const snake = [
    {x:280, y:280}
]

const drawFood = () => {
    const {x, y, color} = food
    ctx.shadowColor = color
    ctx.shadowBlur = 9
    ctx.fillStyle = color
    ctx.fillRect(x,y,size,size)
    ctx.shadowBlur = 0
<<<<<<< HEAD

=======
    {x:280, y:280}
]

const drawFood = () => {
    const {x, y, color} = food
    ctx.shadowColor = color
    ctx.shadowBlur = 9
    ctx.fillStyle = color
    ctx.fillRect(x,y,size,size)
    ctx.shadowBlur = 0
>>>>>>> 4e13467f7dae991468c380477ba3d43c72537084
=======
>>>>>>> d26f5f2aa7b8de1e4530c7492651228588fe17fd
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
<<<<<<< HEAD
<<<<<<< HEAD
    if(!dir){return}  
=======
    if(!dir){return}

>>>>>>> 4e13467f7dae991468c380477ba3d43c72537084
=======
    if(!dir){return}

>>>>>>> d26f5f2aa7b8de1e4530c7492651228588fe17fd
    const head = snake[snake.length -1]

    if (dir == 'right'){
        snake.push({x: head.x + size, y: head.y})
    }    
    if (dir == 'left'){
        snake.push({x: head.x - size, y: head.y})
    }    
    if (dir == 'down'){
<<<<<<< HEAD
<<<<<<< HEAD
        snake.push({x: head.x, y: head.y  + size})
=======
        snake.push({x: head.x, y: head.y + size})
>>>>>>> 4e13467f7dae991468c380477ba3d43c72537084
=======
        snake.push({x: head.x, y: head.y + size})
>>>>>>> d26f5f2aa7b8de1e4530c7492651228588fe17fd
    }    
    if (dir == 'up'){
        snake.push({x: head.x, y: head.y - size})
    }
    snake.shift()
}
<<<<<<< HEAD
<<<<<<< HEAD
const gameLoop = ()=>{
    ctx.clearRect(0,0,600,600)
=======

const gameLoop = () => {
    clearTimeout(idTimer)
    ctx.clearRect(0,0,canvas.width,canvas.height)
    drawFood()
>>>>>>> d26f5f2aa7b8de1e4530c7492651228588fe17fd
    moveSnake()
    drawSnake()
    if(grid){drawGrid()}
    idTimer = setTimeout(()=>{gameLoop()}, time)
}

const drawGrid = ()=>{
    ctx.lineWidth = gridLineWidth
    ctx.strokeStyle = gridColor 

<<<<<<< HEAD
    for(let i = size; i < canvas.width; i += size){
=======

const gameLoop = () => {
    clearTimeout(idTimer)
    ctx.clearRect(0,0,canvas.width,canvas.height)
    drawFood()
    moveSnake()
    drawSnake()
    if(grid){drawGrid()}
    idTimer = setTimeout(()=>{gameLoop()}, time)
}

const drawGrid = ()=>{
    ctx.lineWidth = gridLineWidth
    ctx.strokeStyle = gridColor 

    for(let i = size; i < canvas.width; i += size ){
>>>>>>> 4e13467f7dae991468c380477ba3d43c72537084
=======
    for(let i = size; i < canvas.width; i += size ){
>>>>>>> d26f5f2aa7b8de1e4530c7492651228588fe17fd
        ctx.beginPath()
        ctx.lineTo(i, 0)
        ctx.lineTo(i, canvas.width)
        ctx.stroke()
<<<<<<< HEAD
<<<<<<< HEAD
    }    
    
    for(let i = size; i < canvas.height; i += size){
=======
    }

    for(let i = size; i < canvas.height; i += size ){
>>>>>>> 4e13467f7dae991468c380477ba3d43c72537084
=======
    }

    for(let i = size; i < canvas.height; i += size ){
>>>>>>> d26f5f2aa7b8de1e4530c7492651228588fe17fd
        ctx.beginPath()
        ctx.lineTo(0, i)
        ctx.lineTo(canvas.height, i)
        ctx.stroke()
    }
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> d26f5f2aa7b8de1e4530c7492651228588fe17fd
}
document.addEventListener('keydown', ({key})=>{
<<<<<<< HEAD
    if (key == 'w' && dir != "down"){dir = 'up'}  
=======
}
document.addEventListener('keydown', ({key})=>{
    if (key == 'w' && dir != "down"){dir = 'up'}
>>>>>>> 4e13467f7dae991468c380477ba3d43c72537084
=======
    if (key == 'w' && dir != "down"){dir = 'up'}
>>>>>>> d26f5f2aa7b8de1e4530c7492651228588fe17fd
    if (key == 's' && dir != "up"){dir = 'down'}
    if (key == 'a' && dir != "right"){dir = 'left'}
    if (key == 'd' && dir != "left"){dir = 'right'}
})
<<<<<<< HEAD
<<<<<<< HEAD

gameLoop()
=======
gameLoop()
>>>>>>> 4e13467f7dae991468c380477ba3d43c72537084
=======
gameLoop()
>>>>>>> d26f5f2aa7b8de1e4530c7492651228588fe17fd
