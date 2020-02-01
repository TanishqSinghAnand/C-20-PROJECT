
var r = 0;
var g = 50;
var b=255;
var tsa ;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(1200,400);
   tsa = createSprite(200,200,50,50);
 tsa.shapeColor = "red";
}


function draw(){
  background("pink"); 
 // tsa = ellipse(200,200,50,30);
  tsa.x = World.mouseX;
  tsa.y = World.mouseY;

  if (tsa.x < 400 && tsa.x>0){
    background("blue");
  }
  else if (tsa.x < 800 && tsa.x>400){
  background("Yellow");
}
else if(tsa.x < 1200 && tsa.x>800){
  background("green");
}


  // change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis

  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.

  drawSprites();
}