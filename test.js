function setup() {
    createCanvas(400, 400);
    background(180,100,155);
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
  
  