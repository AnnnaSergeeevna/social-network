import React from 'react';
import ReactDOM from 'react-dom';

const Canvas = () => (
  <canvas id="myCanvas" width="500" height="490"></canvas>
var canvas = document.createElement('myCanvas');
var ctx = canvas.getContext("2d");
let ballRadius = 10;

var ballColour = '#fe0384';

let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 1;
let dy = -1;
var paddleHeight = 20;
var paddleWidth = 80;
var paddleX = (canvas.width - paddleWidth) / 2;


var rightPressed = false;
var leftPressed = false;

var brickRowCount = 6;
var brickColumnCount = 3;
var brickWidth = 60;
var brickHeight = 20;
var brickPadding = 20;
var brickOffsetTop = 70;
var brickOffsetLeft = 20;
var brickOffsetRight = 20;

var bricks = [];
for (var c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (var r = 0; r < brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, status: 1 };
  }
}

let score = 0;
var interval = setInterval(draw, 5);


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);


function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = ballColour;
  ctx.fill();
  ctx.closePath();
}
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#09df12";
  ctx.fill();
  ctx.closePath();
}

function drawBricks() {
  for (var c = 0; c < brickColumnCount; c++) {
    for (var r = 0; r < brickRowCount; r++) {
      if (bricks[c][r].status == 1) {
        var brickX = (r * (brickWidth + brickPadding)) + brickOffsetLeft;
        var brickY = (c * (brickHeight + brickPadding)) + brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = "#0065DD";
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}

function keyDownHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = true;
  }
  else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = false;
  }
  else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = false;
  }
}

function mouseMoveHandler(e) {
  var relativeX = e.clientX - canvas.offsetLeft;
  if (relativeX > 0 && relativeX < canvas.width) {
    paddleX = relativeX - paddleWidth / 2;
  }
}

function collisionDetection() {
  for (var c = 0; c < brickColumnCount; c++) {
    for (var r = 0; r < brickRowCount; r++) {
      var b = bricks[c][r];
      if (b.status == 1) {
        if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
          dy = -dy;
          b.status = 0;
          ballRadius += 0.1;
          ctx.globalAlpha -= 0;
          setInterval(draw, +10);
          score++;
          if (score == brickRowCount * brickColumnCount) {
            alert("YOU WIN!");
            document.location.reload();
          }
        }
      }
    }
  }
}

function drawScore() {
  ctx.font = "26px Arial";
  ctx.fillStyle = "#6e00d7";
  ctx.fillText(`Score: ${score}`, 8, 20);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBricks();
  drawBall();
  drawPaddle();
  collisionDetection();
  drawScore();
  if (x + dx > canvas.width - ballRadius || x + dx < 0) {
    dx = -dx;
  }
  if (y - dy < 0) {
    dy = -dy;
  }
  if (y - dy > canvas.height - ballRadius - paddleHeight) {
    if (x > paddleX && x < paddleX + paddleWidth) {
      dy = -dy;
    }
  }
  if (y + dy > canvas.height + ballRadius) {
    alert('GAME OVER');
    document.location.reload();
    clearInterval(interval);
  }
  if (paddleX < canvas.width) {
    paddleX = x - 10
  }
  // if (rightPressed && paddleX < canvas.width - paddleWidth) {
  //   paddleX += 7;
  // }
  // else if (leftPressed && paddleX > 0) {
  //   paddleX -= 7;
  // } 
  // logic of moving the paddle whith keyboard

  x += dx;
  y -= dy;
}
)

ReactDOM.render(<Canvas />, document.getElementById('root'));

export default Canvas