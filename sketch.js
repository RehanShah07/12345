var car,wall;
var speed,weight;


function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 300, 50, 50);
  
  wall=createSprite(1500,300,60,height/2);
  wall.shapeColor="black";
  speed=random(55,90);
  weight=random(400,1500);
}

function draw() {
  background(255,255,255); 
  car.velocityX = speed ;
  if(isTouching(car,wall)){
    car.shapeColor = "blue";
    wall.shapeColor = "black";
  }
  else {
    car.shapeColor = "green";
    wall.shapeColor = "black";
  } 
  drawSprites();
}
function isTouching(car,wall){
  if (car.x - wall.x < wall.width/2 + car.width/2
    && wall.x - car.x < wall.width/2 + car.width/2
    && car.y - wall.y < wall.height/2 + car.height/2
    && wall.y - wall.y < wall.height/2 + car.height/2)
    
    {

    return true;
  }
  else {
    return false;
  } 
}
if(wall.x-car.x < (car.width+wall.width)/2);
{
  car.velocityX=0;
  var deformation=0.5 * weight * speed * speed/22509;
  if(deformation>180);
  {
    car.shapeColor=color(255,0,0);
  }
  if(deformation<180 && deformation>100);
{
  car.shapeColor=color(230,230,0);
}
    if (deformation<100);
    {
      car.shapeColour=color(0,255,0);
    }
}