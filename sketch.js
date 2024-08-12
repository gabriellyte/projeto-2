let cor;
let vertical;
let horizontal;

function setup() {
  createCanvas(1000, 800);
  background("white");
  cor=color(random(0,255),random(0,255),random(0,255),random(0,255));
  
  horizontal = 400;
  vertical = 500;
}

function draw() {
  circle(horizontal,vertical,100);
  fill(cor);
  
  if(mouseX < horizontal) {
   horizontal--
}
if(mouseX > horizontal) {
   horizontal++
}
  if(mouseY < vertical) {
   vertical--
  }
  if(mouseY > vertical) {
   vertical++
  }
  if(mouseIsPressed){
   cor=color(random(0,255),random(0,255),random(0,255),random(0,255)); 
  }
}
