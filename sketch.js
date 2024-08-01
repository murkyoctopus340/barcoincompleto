var ship,shipImg;
var sea,seaImg;
function preload(){
shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

seaImg = loadImage("sea.png");
sea.velocityX=4
if(sea.x<0) {
sea.x=sea.width/2;

}

}

function setup(){
 
  createCanvas(400,400); 

   //crear oceano
   sea = createSprite(0,200,400,400);
   sea.addImage("oceano", seaImg);
   sea.scale=0.2
 
  //crear barco
  ship = createSprite(200,250,50,50);
  ship.addAnimation("navegar",shipImg);
  ship.scale=0.25;

}

function draw() {
  background("blue");
 






  drawSprites();
}