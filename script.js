// snakw game
const canvas = document.querySelector(".canvas")
const ctx = canvas.getContext("2d");

const scale = 20;
const row = canvas.height / scale;
const columns = canvas.width /scale

let snake = [];
snake[0] = {
    x: (Math.floor(Math.random() * 
    columns)) * scale,
    y: (Math.floor(Math.random() * 
    row)) * scale
}

let playGame = setInterval(draw, 100); 

function diraction(event) {
    ctx.fillStyle = "#fff"; 
    ctx.strokStyle = "#F00";
    
    ctx.fillRect (snake[0].x, snake[0].y , scale, scale);
    ctx.strokeRect (snake[0].x , snake[0].y, scale, scale)
}

