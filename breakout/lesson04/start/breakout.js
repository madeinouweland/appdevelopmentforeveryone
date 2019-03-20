const brickWidth = 82;
const brickHeight = 30;
const brickMargin = 4;
const gameWidth = 798;
const gameHeight = 600;
const borderWidth = 10;
const stoneColors = ["#9d9d9d", "#ae2317", "#e0df49", "#67809d", "#b24b9e", "#86dc43"];

function setup() {
  createCanvas(gameWidth, gameHeight);
}

function draw() {
  background("#01155a");

  noStroke();

  for(let row=0; row<6; row++) {
    for(let col=0; col<9; col++) {
      fill(stoneColors[row]);
      rect(col * brickWidth + col * brickMargin + borderWidth + brickMargin, row * brickHeight + row * brickMargin + borderWidth + brickMargin, brickWidth, brickHeight);
    }
  }

  fill("#cccccc");

  // draw walls
  rect(0, 0, borderWidth, gameHeight);
  rect(0, 0, gameWidth, borderWidth);
  rect(gameWidth - borderWidth, 0, borderWidth, gameHeight);
}
