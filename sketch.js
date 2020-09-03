var  thickness , wall;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);

  bullet=createSprite(50, 200, 10, 10);
  bullet.shapeColor="white";
  wall=createSprite(1200, 200, thickness, height/2);
  wall.shapeColor="grey";


   thickness = random(28,83);
   speed = randm(223,321);
   weight = random(30,52);
}


function draw() {
  background(0,0,0);  
   
  bullet.veloctiyX = speed;

  if (hasCollided (bullet, wall)){

     bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

     if (damage > 10)
     {
       wall.shapeColor = "red";
     }

     if (damage < 10)
     {
       wall.shapeColor = "green";
     }

  }

  drawSprites();
}

  function hasCollided(lbullet, lwall){

    bulletRightEdge = lbullet.x + ibullet.width;
    wallLeftEdge = iwall.x;

     if(bulletRightEdge >= wallLeftEdge)
     {
      return true
     }
      return false;

  }
