var ship, ship_running, edges;
var backgroundImage;

function preload(){
ship_running= loadAnimation('ship1.png','ship2.png');
  backgroundImage = loadImage("sea.png")
}

function setup(){
  createCanvas(800,800);
  // creating ba
  
bg=createSprite(300,180,600,20);
  bg.addImage(backgroundImage)
  bg.velocityX= -4;
ship = createSprite(120,240,20,50);
  ship.addAnimation("running", ship_running);
  
  //adding scale and position to ship
  ship.scale = 0.3;
}

function draw() {
  background("blue");
  if(bg.x<0){
    bg.x=bg.width/2
  }
  
  
 drawSprites();
  
}