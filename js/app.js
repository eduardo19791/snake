const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const size = 20
const c1 = 'rgba(200,200,200,0.8)'
const c2 = 'rgba(255,255,255,1.0)'

const snake = [
    {x: 280, y: 280},
    {x: 300, y: 280},
    {x: 320, y: 280},
    {x: 340, y: 280},
    {x: 360, y: 280},
    {x: 380, y: 280},
    {x: 400, y: 280},
    {x: 420, y: 280}
]

const drawSnake = () => {
    snake.forEach((e, k) => {
        if(k == snake.length -1){
            ctx.fillStyle = c2
        }
        else{
            ctx.fillStyle = c1
        }
        ctx.fillRect(e.x, e.y, size, size)
    })
}

drawSnake()