// Add your name 
// add a custom variable: i.e. var diam1 = 10 or textx = 0

// if you prefer change your Canvas size. This function only happens once
function setup() {
	createCanvas(500, 500); 
	// add Background here if you want to create a painting program
}

function draw() {
  background("168,230,207"); //add an RGB color for the canvas' background
 
  // define fill and stroke of each shape
  stroke(); // add an RGB color
  strokeWeight() //add the number of pixel
  fill(); // add an RGBA color for the inside of the circle
         //(the last number refers to transparency (min. 0, max. 255))
   // add one or two shapes 
  ellipse(width/2,height/2,diam1,diam1); // width/2 =center of canvas, define your diam1 pixels or use a var)
  rect(xpos, ypos, width, height); // replace for your values /change fill and stroke
  // add text: define the fill, stroke and
  textSize();
  textFont();   // "Georgia", "Helvetica", "Arial",...
  textStyle();  // Style: BOLD, ITALIC,...
  textAlign();  // LEFT,CENTER or RIGHT
  text("your text",posx,posy); //or add var i.e. instead of "posx" use "textx" and below...
   // add an assignment operation i.e.: textx = text + 5
   
   // add a system variable. i.e.: ellipse(mouseX,mouseY,30,30);
   
   // add random values or positions, i.e. 
   ellipse(random(width),random(height),30,30);
      }
      
   // add an Event such as mousePressed or keyPressed
function mousePressed() {
	  // background(); // if the bg is on "setup" instead of the "draw" function, 
	  // you can add the background here to reset the drawing.
  // or add a Conditional, i.e.:
     if (diam1 >= 100) {
		 diam1 = 10;}
	 else{
		 diam1 = diam1+5;
		 }
	   }

