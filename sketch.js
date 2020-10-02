
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var invisibleGround;
var survivalTime=0


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  
  obstacleImage  = loadImage("obstacle.png");
 
}



function setup() {
  
   monkey=createSprite(80,315,20,20)
monkey.addAnimation("moving", monkey_running  )  ;
  monkey.scale=0.1
  
  ground=createSprite(400,315,900,10);
  ground.velocityX=-4
  ground.x=ground.width/2
  console.log(ground.x);
  
  
  FoodGroup=createGroup();
  obstacleGroup=createGroup();
  
  
  
  invisibleGround = createSprite(400,325,900,20)
  invisibleGround.visible = true;

  
}


function draw() {
background ("white");
  
   if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY= -12;
   }
monkey.velocityY= monkey.velocityY +0.8
   monkey.collide(invisibleGround)
  
  stroke("white")
  textSize(20);
  fill("white")
  text("score:"+score,500,50);
  
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime= Math.ceil(frameCount/frameRate())
  text("SurvivalTime:" +survivalTime,100,50)
  
  
  Banana();
  obstacle();
  drawSprites ()
}

function Banana(){
if(frameCount%80===0){


var banana=createSprite(400,200,20,20);
banana.addImage(bananaImage);
banana.scale=0.1
banana.velocityX=-4
banana.lifetime=200
  
  
  FoodGroup.add(banana)

}
}
function obstacle(){
  if(frameCount%300===0){
   var obstacle=createSprite(400,300,30,30)
   obstacle.addImage(obstacleImage);
    obstacle.velocityX=-4
    obstacle.lifetime=300;
    obstacle.scale=0.2
   obstacleGroup.add(obstacle);
    
  }
}


