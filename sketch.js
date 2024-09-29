let backColor;
let d;

let myFont;

function preload(){
  myFont = loadFont("Bodoni_Ornaments.ttf"); 
}

function setup() {
  colorMode(RGB, 255);
  backColor = color(14, 14, 14);
  d = 1;

  background(backColor);

  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  textFont(myFont);
  textSize(12);  
  textAlign(CENTER, CENTER); 

}

function draw() {
  background(backColor);  
  d = 1; 

  for (let x = -width / 2 + 60; x < width / 2 - 60; x += 120) {
    for (let y = -height / 2 + 60; y < height / 2 - 60; y += 120) {
      push();
      translate(x, y, 0); 
      
      if (d == 1) {
        noStroke();
        rotateX(frameCount/3); 
        drawLetterC();
        fill(0);
        d = -1; 

      } else {
        noStroke();
        rotateY(frameCount/3); 
        fill(150,150,150);
        text("1", 0, 0); 
        d = 1;  
      }
      pop();
    }
  }
}

function drawLetterC(){

  push();
  fill(255, 246, 0);
  translate(60, -60, 0);
  box(60);
  pop();

  push();
  fill(234, 226, 245);
  translate(30, -60, 0);
  box(62);
  pop();

  push();
  fill(196, 289, 0);
  translate(0, -30, 0);
  box(64);
  pop();

  push();
  fill(124, 120, 0);
  translate(0, 0, 0);
  box(66);
  pop();

  push();
  fill(62, 60, 0);
  translate(0, 30, 0);
  box(68);
  pop();

  push();
  fill(20, 20, 0);
  translate(30, 60, 0);
  box(70);
  pop();
  
  push();
  fill(30, 30, 0);
  translate(60, 60, 0);
  box(72);
  pop();

}