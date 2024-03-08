const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const size = 20

const c1 = "#93827C"
const c2 = "#79645C"

const snake = [
    {x:280, y:280},
    {x:300, y:280},
    {x:320, y:280},
    {x:340, y:280},
    {x:360, y:280},
    {x:380, y:280},
    {x:400, y:280},
    {x:420, y:280}
]


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

drawSnake()