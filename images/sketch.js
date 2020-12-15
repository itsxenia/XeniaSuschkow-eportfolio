let snowflakes = [];
var curx = 0, cury = 0;
var speed = 30;

function setup() { 
   createCanvas(600, 400);
    var canvas = createCanvas(600, 400);
    textFont("Arial");
  textSize(36);
  fill(0);
     // Move the canvas so it’s inside our <div id="sketch-holder">.
  canvas.parent('sketch-holder');
}

function draw() {    
   background('#a4c6de');
    mposx = mouseX;//library function to find the co-ords of the mouse
  mposy = mouseY;
  vec = createVectorDirection(mposx, mposy, curx, cury);//find the vector between the cursor and current text position
  moveCurrent(curx, cury, mposx, mposy, vec, speed); // move the text in the direction of the cursor and apply a speed variable
  drawWords(curx, cury);
    stroke ('#3b2f50');
    fill ('#ffe3d8');
    strokeWeight (2)
    rect(0,330,600,70);
    fill ('#e7ebed');
    stroke('#165166');
    let t = frameCount / 60;
    
ellipse(400, 300, 150, 150); //snowman body
ellipse(400, 200, 100, 100);
ellipse(400, 120, 75, 75);
fill ('#165166');
    
ellipse (385,120,10,10); //eyes
ellipse (415,120,10,10);
 
line (250,120,360,200); //arms
line (540,120,440,200);
    

 //text
strokeWeight (0);
textSize (40);
textFont ("Arial");
textAlign (LEFT);


    
for (let i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake()); // append snowflake object
  }
for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }

  }

function drawWords(x, y) {
  text("*chills*", x, y);
}

function createVectorDirection(mx, my, cx, cy){
    return createVector((mx-cx),(my-cy));
}

function moveCurrent(cx, cy, mx, my, v, s){
    curx +=  (v.x * 1/s);
    cury +=  (v.y * 1/s);
}

function snowflake() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);
fill ('#ffe3d8');

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    // x position follows a circle
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);
      
      this.posY += pow(this.size, 0.5);

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}
