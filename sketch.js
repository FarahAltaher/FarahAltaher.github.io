let bubbles = [];
function windowResized() { 
    resizeCanvas(windowWidth, windowHeight); 
} 
function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 30; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(30, 50);
    bubbles[i] = new Bubble(x, y, r,random(0,255));
  }
}
function mousePressed() {
    let x = mouseX
    let y = mouseY
    let r = random(30, 50);
    append(bubbles, new Bubble(x, y, r));
}
function draw() {


  for (let b of bubbles) {
    b.show();
    b.move();
  }
}

class Bubble {
  constructor(x, y, r = 50,yellowness ) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.yellowness = yellowness;
  }
  
  

  move() {
    this.x = this.x + random(random(-5,0), random(0, 5));
    this.y = this.y + random(random(-5,0), random(0,5));
  }

  show() {
    noStroke()
        fill(255,180,this.yellowness, 100)
    ellipse(this.x, this.y, this.r * 2);
    

   
  }
}