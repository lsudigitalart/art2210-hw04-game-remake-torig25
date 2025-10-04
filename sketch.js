let playerX = 400;
let playerSize = 20;
let playerY = 700;

let obstacleX = 400;
let obstacleY = -50;
let obstacleSize = 100
let obstacleSpeed = 3;

let score = 0;
let isGameOver = false;
let obstacleTimer = 0;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  if (isGameOver) {
    drawGameOver();
    return;
  }

  background(50, 50, 100);

  // Player movement
  playerX = mouseX;
  playerY = mouseY;


  // Obstacle
  obstacleY += obstacleSpeed;

  // Reset obstacle
  if (obstacleY > height + obstacleSize) {
    obstacleY = -obstacleSize;
    obstacleX = random(obstacleSize, width - obstacleSize);
    score += 1;

    // Difficulty
    if (score % 1 === 0) {
      obstacleSpeed += 1.0;
    }
  }

  // Collision
  let distance = dist(playerX, playerY, obstacleX + obstacleSize/2, obstacleY + obstacleSize/2);
  if (distance < (playerSize + obstacleSize) / 2) {
    isGameOver = true;
  }

  // Player
  fill(100, 255, 100);
  ellipse(playerX, playerY, playerSize, 50, 100);
  ellipse(playerX -200, playerY, playerSize, 50, 100);
  ellipse(playerX +200, playerY, playerSize, 50, 100);

  // Draw obstacle
  fill(400);
  noStroke();
  rect(obstacleX, obstacleY, obstacleSize, obstacleSize, 100);
  rect(obstacleX -200, obstacleY, obstacleSize, obstacleSize, 100);
  rect(obstacleX +200, obstacleY, obstacleSize, obstacleSize, 100);
  rect(obstacleX -400, obstacleY, obstacleSize, obstacleSize, 100);
  rect(obstacleX +400, obstacleY, obstacleSize, obstacleSize, 100);
  rect(obstacleX -600, obstacleY, obstacleSize, obstacleSize, 100);
  rect(obstacleX +600, obstacleY, obstacleSize, obstacleSize, 100);
  

  // Draw score
  fill(255);
  textSize(20);
  text("Score: " + score, 20, 30);
  text("Speed: " + obstacleSpeed.toFixed(1), 20, 60);

  // Instructions
  textSize(14);
  text("Dodge mines without hitting your main ship, some mines are decoys. Survive long as possible!", 20, height - 20);
}

function drawGameOver() {
  background('red');
  fill(255);
  textAlign(CENTER);
  textSize(80);
  text("GAME OVER X(", width/2, height/2 - 40);
  textSize(24);
  text("Your score: " + score, width/2, height/2);
  textSize(18);
  text("Click to Restart", width/2, height/2 + 40);
}

function mousePressed() {
  if (isGameOver) {
    // Restart game
    isGameOver = false;
    score = 0;
    obstacleSpeed = 3;
    playerX = 400;
    obstacleX = 400;
    obstacleY = -50;
  }
}




