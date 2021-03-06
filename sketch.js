var a1;
var a2;
function setup() {
  createCanvas(800,400);
  a1=createSprite(400, 200, 50, 50);
  a2=createSprite(100,200,30,30);
  a1.velocityX = -3
  
}

function draw() {
  background(0);  
  //a1.x = World.mouseX;
  //a1.y = World.mouseY;
  console.log(a1.x-a2.x);
  console.log(a1.width/2+a2.width/2);
  if(a1.x-a2.x<=a1.width/2+a2.width/2&& a2.x-a1.x<=a2.width/2+a1.width/2)
  {
    a1.velocityX=a1.velocityX*(-1);
    a2.velocityX=a2.velocityX*(-1);
  }
  if( a1.y-a2.y<=a1.height/2+a2.height/2&& a2.y-a1.y<=a2.height/2+a1.height/2)
  {
 a1.velocityY = a1.velocityY*(-1)
 a2.velocityY = a2.velocityY*(-1)
  }
  drawSprites();
}