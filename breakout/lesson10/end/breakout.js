const offsetTop = 50
const brickWidth = 82;
const brickHeight = 30;
const brickMargin = 4;
const gameWidth = 798;
const gameHeight = 600;
const borderWidth = 10;
const ballRadius = 10;
const playerWidth = 140;
const playerHeight = 20;
const playerBottomMargin = 50;
const enableComputerPlayer = false;
const brickColors = ["#9d9d9d", "#ae2317", "#e0df49", "#67809d", "#b24b9e", "#86dc43"];
let bricks = [];
const speed = 8;
let score = 0;
let lives = 5;

let ball;
let playerX;
let playerY;

function setup() {
  createCanvas(gameWidth, gameHeight);
  ellipseMode(RADIUS);
  textSize(36);
  setupRound();
}

function setupRound() {
  for(let row=0; row<6; row++) {
    for(let col=0; col<9; col++) {
      bricks.push({
        x: col * brickWidth + col * brickMargin + borderWidth + brickMargin,
        y: row * brickHeight + row * brickMargin + borderWidth + brickMargin + offsetTop,
        color: brickColors[row],
      });
    }
  }

  ball = {
    x: gameWidth / 2,
    y: gameHeight - 50,
    directionX: 1,
    directionY: -1,
  }

  playerX = gameWidth / 2 - playerWidth / 2;
  playerY = gameHeight - playerBottomMargin;
}

function update() {
  ball.x += ball.directionX * speed;
  ball.y += ball.directionY * speed;

  if (ball.x + ballRadius > gameWidth - borderWidth) {
    ball.directionX = -1;
  }

  if (ball.y - ballRadius < borderWidth + offsetTop) {
    ball.directionY = 1;
  }

  if (ball.x - ballRadius < borderWidth) {
    ball.directionX = 1;
  }

  if (ball.y + ballRadius > playerY
    && ball.y - ballRadius < playerY + playerHeight
    && ball.x + ballRadius > playerX
    && ball.x - ballRadius < playerX + playerWidth
  ) {
    ball.directionY = -1;
  }

  if (enableComputerPlayer) {
    playerX = ball.x - playerWidth / 2;
  } else {
    if (keyIsDown(LEFT_ARROW)) {
      playerX -= speed * 1.5;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      playerX += speed * 1.5;
    }
  }

  if (playerX < borderWidth) {
    playerX = borderWidth;
  }

  if (playerX + playerWidth > gameWidth - borderWidth) {
    playerX = gameWidth - borderWidth - playerWidth;
  }

  let impacts = bricks.filter(brick => isColliding(
    { x: ball.x, y: ball.y, radius: ballRadius },
    { x: brick.x, y: brick.y, width: brickWidth, height: brickHeight }));
  if (impacts.length > 0) {
    bricks = bricks.filter(brick => brick !== impacts[0]);
    ball.directionY = 1;
    score++;
    if (bricks.length < 1) {
      setupRound();
    }
  }

  if (ball.y > gameHeight) {
    lostBall();
  }
}

function gameOver() {
  noLoop();
}

function lostBall() {
  lives--;
  if (lives === 0) {
    gameOver();
  }
  // reset ball position
  ball.x = playerX + playerWidth / 2;
  ball.y = playerY - ballRadius;
  ball.directionX = 1;
  ball.directionY = -1;
}

let isRunning = true;

function keyPressed() {
  if (key === " ") {
    if (isRunning) {
      noLoop();
      isRunning = false;
    } else {
      loop();
      isRunning = true;
    }
  }
}

function draw() {
  update();

  background("#01155a");

  noStroke();

  // draw bricks
  bricks.forEach(brick => {
    fill(brick.color);
    rect(brick.x, brick.y, brickWidth, brickHeight);
  });

  fill("#cccccc");

  // draw ball
  ellipse(ball.x, ball.y, ballRadius, ballRadius);

  // draw player
  rect(playerX, playerY, playerWidth, playerHeight);

  // draw walls
  rect(0, offsetTop, borderWidth, gameHeight); // left
  rect(0, offsetTop, gameWidth, borderWidth); // top
  rect(gameWidth - borderWidth, offsetTop, borderWidth, gameHeight); // right

  fill('#ae2317');
  text(`SCORE: ${score}`, 10, 37);
  fill('#67809d');
  text(`LIVES: ${lives}`, 440, 37);

  if (lives === 0) {
    fill("#ae2317");
    rect(150, 150, width - 300, height - 300);
    fill("#fff");
    textSize(60);
    textAlign(CENTER);
    text("GAME OVER", width / 2, height / 2);
  }
}
