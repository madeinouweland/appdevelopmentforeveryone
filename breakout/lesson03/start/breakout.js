const brickWidth = 90;
const brickHeight = 40;
const brickMargin = 4;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background("#01155a");

  noStroke();

  fill("#ff0000");
  for(let row=0; row<6; row++) {
    for(let col=0; col<9; col++) {
      rect(col * brickWidth + col * brickMargin, row * brickHeight + row * brickMargin, brickWidth, brickHeight);
    }
  }
}
