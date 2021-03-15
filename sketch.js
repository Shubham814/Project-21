var wall,thickness;

var bullet,weight,speed;

function setup() {
  createCanvas(1600,400);
 
 //creating bullet
 bullet = createSprite(100,height/2,50,10);
 bullet.shapeColor="white";

 //creating wall
  wall = createSprite(1200, 200,Math.round(random(22,83)), height/2);
 
 

  //defining speed and weight
  speed=random(55,90);
  weight=random(400,1500);
  thickness=wall.width;
}

function draw() {
  background("black");  
  

console.log(wall.width);

  //making bullet velocity
  bullet.velocityX = speed;



if (hasCollided(bullet,wall)){
  bullet.velocityX=0;
  var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

if (damage>10){
  wall.shapeColor="red";
}

if (damage<10){
  wall.shapeColor=color(0,255,0);
}
}

//make car over the wall
wall.depth=bullet.depth;
bullet.depth=bullet.depth+1;



  drawSprites();
}

function hasCollided(o1,o2){
  bulletRightEdge =o1.x + o1.width;
  wallLeftEdge = o2.x;

  if (bulletRightEdge>=wallLeftEdge){
    return  true;
  }
 return false;


}