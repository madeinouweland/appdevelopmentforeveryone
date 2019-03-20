const brickWidth = 82;
const brickHeight = 30;
const brickMargin = 4;
const gameWidth = 798;
const gameHeight = 600;
const borderWidth = 10;
const brickColors = ["#9d9d9d", "#ae2317", "#e0df49", "#67809d", "#b24b9e", "#86dc43"];
let bricks = [];

function setup() {
  createCanvas(gameWidth, gameHeight);
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
}

function draw() {
  background("#01155a");

  noStroke();

  // draw bricks
  bricks.forEach(brick => {
    fill(brick.color);
    rect(brick.x, brick.y, brickWidth, brickHeight);
  });

  fill("#cccccc");

  // draw walls
  rect(0, 0, borderWidth, gameHeight);
  rect(0, 0, gameWidth, borderWidth);
  rect(gameWidth - borderWidth, 0, borderWidth, gameHeight);
}
