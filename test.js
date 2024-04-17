function setup() {
    createCanvas(400, 400);
    background(0);
  }
  
  function draw() {
    if (!mouseIsPressed) {
      noStroke();
      erase();
    } else{
      fill(0);
    }
    ellipse(mouseX, mouseY, 50, 50);
  }
  
  