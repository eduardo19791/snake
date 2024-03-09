const canvas = document.querySelector('canvas')
const score = document.querySelector('.score--value')
const finalScore = document.querySelector('.final-score > span')
const menu = document.querySelector('.menu-screen')
const btnPlay = document.querySelector('.btn-play')
const ctx = canvas.getContext('2d')
const audio1 = new Audio('../assets/audio/message-13716.mp3')
const size = 20
let time = 500
const c1 = "#93827C"
const c2 = "#79645C"
const gridLineWidth = 0.5
const gridColor = 'rgba(255,255,255,0.2)'
const grid = true
let idTimer, dir

const scoreIncrement = ()=>{
    score.innerHTML = +score.innerHTML + 10
    if (time < 5) { time = 5}else{time = time - (snake.length / 10)}
}

const randNumber = (min, max)=> {
    return Math.round(Math.random() * (max - min) + min)
}

const randColor = () => {
    const r = randNumber(0, 255)
    const g = randNumber(0, 255)
    const b = randNumber(0, 255)
    return `rgb(${r},${g},${b})`
}

const randomPos = ()=> {
    const x = randNumber(0, canvas.width - size)
    const y = randNumber(0, canvas.height - size)
    const color = randColor()
    return { x: Math.round(x / size) * size, y: Math.round(y / size) * size}
}

const food = {
    x: randomPos().x,
    y: randomPos().y,
    color: randColor()
}

let snake = [
    {x:280, y:280}
]

const drawFood = () => {
    const {x, y, color} = food
    ctx.shadowColor = color
    ctx.shadowBlur = 9
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
        snake.push({x: head.x, y: head.y + size})
    }    
    if (dir == 'up'){
        snake.push({x: head.x, y: head.y - size})
    }
    snake.shift()
}

const drawGrid = ()=> {
    ctx.lineWidth = gridLineWidth
    ctx.strokeStyle = gridColor 


    for(let i = size; i < canvas.width; i += size){
        ctx.beginPath()
        ctx.lineTo(i, canvas.width)
        ctx.lineTo(i, 0)
        ctx.stroke()
    }    
    for(let i = size; i < canvas.height; i += size){
        ctx.beginPath()
        ctx.lineTo(canvas.height, i)
        ctx.lineTo(0, i)
        ctx.stroke()
    }
}

const checkEat = () => {
    const head = snake[snake.length - 1]

    if(head.x == food.x && head.y == food.y){
        audio1.play()
        scoreIncrement()
        snake.push(head)
        let x = randomPos().x
        let y = randomPos().y

        while(snake.find((p)=> p.x == x && p.y == y)){
            x = randomPos().x
            y = randomPos().y
        }

        food.x = x
        food.y = y
        food.color = randColor()
    }
}

const checkCollision = () => {
    const head = snake[snake.length -1]
    const neck = snake[snake.length - 2]

    const wallCollision = head.x < 0 || head.x > (canvas.width - size) || head.y < 0 || head.y > (canvas.height - size)
    const selfCollision = snake.find((p, k)=> { return k < neck && p.x == head.x && p.y == head.y})

    if (wallCollision || selfCollision){
        gameOver()
    }
}

const gameOver = () => {
    dir = undefined;
    menu.style.display = 'flex';
    finalScore.innerText = score.innerText;
    canvas.style.filter = 'blur(5px)';
}

const gameLoop = () => {
    clearTimeout(idTimer)
    ctx.clearRect(0,0,canvas.width,canvas.height)
    checkCollision()
    drawFood()
    moveSnake()
    drawSnake()
    checkEat()
    if(grid){drawGrid()}
    idTimer = setTimeout(()=>{gameLoop()}, time)
}

document.addEventListener('keydown', ({key})=>{

    if(key == 'w' && dir != 'down'){dir = 'up'}
    if(key == 's' && dir != 'up'){dir = 'down'}
    if(key == 'a' && dir != 'right'){dir = 'left'}
    if(key == 'd' && dir != 'left'){dir = 'right'}

})
btnPlay.addEventListener('click', ()=>{
    canvas.style.filter = 'none'
    menu.style.display = 'none'
    score.innerText = '00'
    
    snake = [{x:280, y:280}]
})
gameLoop()