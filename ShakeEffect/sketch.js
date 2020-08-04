let index = 0;
let c="";
let message = 'Henka Studios',
  font,
  bounds, // holds x, y, w, h of the text's bounding box
  fontsize = 60,
  x,
  y;// x and y coordinates of the text

function preload() {
  font = loadFont('assets/Lobster.otf');
}

function setup() {
	
  createCanvas(windowWidth, windowHeight);

frameRate(10);
  // set up the font
  textFont(font);
  textSize(fontsize);

  // get the width and height of the text so we can center it initially
  bounds = font.textBounds(message, 0, 0, fontsize);
  x = width / 2 - bounds.w / 2;
  y = height / 2 - bounds.h / 2;
}

function draw() {
  background(179,216,230);

   let sub = message.substring(index, index + 1);
  c=c+sub;

  index++;

  if (index > message.length) {
    index = 0;
    c="";
  }
  
  // write the text in black and get its bounding box
  fill(0);
  text(c, x, y);
  bounds = font.textBounds(message, x, y, fontsize);

  // check if the mouse is inside the bounding box and tickle if so
  if (
    mouseX >= bounds.x &&
    mouseX <= bounds.x + bounds.w &&
    mouseY >= bounds.y &&
    mouseY <= bounds.y + bounds.h
  ) {
    x += random(-2, 2);
    y += random(-2, 2);
  }
}