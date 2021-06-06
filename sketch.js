


function preload()
{
  iss=loadImage("Docking-undocking/iss.png");
  spacebg=loadImage("Docking-undocking/spacebg.jpg")
  spaceShipImg1=loadImage("Docking-undocking/spacecraft1.png")
  spaceShipImg2=loadImage("Docking-undocking/spacecraft2.png")
  spaceShipImg3=loadImage("Docking-undocking/spacecraft3.png")
  spaceShipImg4=loadImage("Docking-undocking/spacecraft4.png")


}


function setup() 
{
  createCanvas(800,400);
  
}

function draw() 
{
  background(spacebg);
  
  issShip=createSprite(400, 200, 50, 50);
  issShip.addImage(iss)
  issShip.scale=0.5;

  spaceShip=createSprite(400, 250, 50, 50);
  spaceShip.addImage(spaceShipImg1);
  spaceShip.scale=0.1;

  drawSprites();
}

function keyPressed()
{
  if(keyCode === UP_ARROW)
  {
   spaceShip.y-=10 
   spaceShip.addAnimation("up",spaceShipImg2);
  }

  if(keyCode === LEFT_ARROW)
  {
   spaceShip.x=spaceShip.x-=10
   spaceShip.addAnimation("left",spaceShipImg3);
  
  }

  if(keyCode === RIGHT_ARROW)
  {
   spaceShip.x+=10 
   spaceShip.addAnimation("right",spaceShipImg4);
  }

}

//if(spaceShip.isTouching(iss))
//{
 // text("DOCKING SUCCESSFULL",50,150)
//}
