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
const brickColors = ["#9d9d9d", "#ae2317", "#e0df49", "#67809d", "#b24b9e", "#86dc43"];
let bricks = [];
const speed = 8;

let ball;
let playerX;
let playerY;

function setup() {
  createCanvas(gameWidth, gameHeight);
  ellipseMode(RADIUS);
  setupRound();
}

function setupRound() {
  for(let row=0; row<6; row++) {
    for(let col=0; col<9; col++) {
      bricks.push({
        x: col * brickWidth + col * brickMargin + borderWidth + brickMargin,
        y: row * brickHeight + row * brickMargin + borderWidth + brickMargin,
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

  if (ball.y - ballRadius < borderWidth) {
    ball.directionY = 1;
  }

  if (ball.x - ballRadius < borderWidth) {
    ball.directionX = 1;
  }

  if (ball.y + ballRadius > gameHeight - borderWidth) {
    ball.directionY = -1;
  }

  playerX = ball.x - playerWidth / 2;

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
  }
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
  rect(0, 0, borderWidth, gameHeight);
  rect(0, 0, gameWidth, borderWidth);
  rect(gameWidth - borderWidth, 0, borderWidth, gameHeight);
}
