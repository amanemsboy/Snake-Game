// snakw game
const canvas = document.querySelector(".canvas")
const ctx = canvas.getContext("2d");

const scale = 20;
const row = canvas.height / scale;
const columns = canvas.width /scale

let snake = [];
snake[0] = {
    x: (Math.floor(Math.random() *  columns)) * scale,
    y: (Math.floor(Math.random() *   row)) * scale
}

let food = {
    x: (Math.floor(Math.random() * columns)) * scale,
    y: (Math.floor(Math.random() * row)) * scale
}

let d = "right"; // Declare d variable here

document.addEventListener("keydown", direction)

function direction(event) {
    let key = event.keyCode;

    if (key == 37 && d != "right") {
        d = "left";
    } else if (key == 38 && d != "down") {
        d = "up";
    } else if (key == 39 && d != "left") {
        d = "right";
    } else if (key == 40 && d != "up") {
        d = "down";
    }
}

let playGame = setInterval(draw, 100); 

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); 

    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = "#fff";
        ctx.strokeStyle = "blue";
        ctx.fillRect(snake[i].x,snake[i].y, scale, scale);
        ctx.strokeRect(snake[i].x,snake[i].y, scale,scale)
    }

    ctx.fillStyle = "#fff"; 
    ctx.strokeStyle = "red";
    
    ctx.fillRect (snake[0].x, snake[0].y , scale, scale);
    ctx.strokeRect (snake[0].x , snake[0].y, scale, scale)

        // food 
        ctx.fillStyle = "#ff0";
        ctx.strokeStyle = "green";
        ctx.fillRect(food.x, food.y, scale, scale);
        ctx.strokeRect(food.x, food.y, scale, scale);

    let snakeX = snake[0].x;
    let snakeY = snake[0].y; 

    if (d === "left") {
        snakeX -= scale;
    } else if (d === "up") {
        snakeY -= scale;
    } else if (d === "right") {
        snakeX += scale;
    } else if (d === "down") {
        snakeY += scale;
    }

    //snake's position reset conditions
    if (snakeX >= canvas.width) {
        snakeX = 0;
    } else if (snakeX < 0) {
        snakeX = canvas.width - scale; // Adjusted to set snake back at canvas width - scale
    }

    if (snakeY >= canvas.height) {
        snakeY = 0;
    } else if (snakeY < 0) {
        snakeY = canvas.height - scale; // Adjusted to set snake back at canvas height - scale
    }

    if (snakeX == food.x && snakeY == food.y) {
        food = {
            x :(Math.floor(Math.random() * columns)) * scale,
            y :(Math.floor(Math.random() * row)) * scale
        }
     } else {
        snake.pop(); 
        
     }
    

let newHead = {
    x : snakeX,
    y : snakeY
}

if (eatSelf(newHead,snake)) {
    clearInterval(playGame)
    alert("Game Over")
}


  // Add the newHead to the snake array
  snake.unshift(newHead);


}
function eatSelf(head, array) {
    for(i = 0; i < array.length; i++) {
        if (head.x ==array[i].x && head.y ==array[i].y){
            return true
        }
    }

    return false
}