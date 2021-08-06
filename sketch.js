var girl, snowflake, bg, obstacle
var girlImg, snowflakeImg, obstacleImg
var snowGroup;
var obstacleGroup;
var score = 0
var PLAY = 1
var END = 0
var gameState = 1
var gameOver, gameOverImg
//gameState = start

function preload(){
girlImg = loadImage("girl.png")
snowflakeImg = loadImage("snowflakeIMG.PNG")
bg = loadImage("snowbg.jpeg")
obstacleImg = loadImage("snowflakeobstacle.png")
gameOverImg = loadImage("GameOver2.png")
}

function setup() {
  createCanvas(800,400);
  girl = createSprite(400, 300, 50, 50);
  girl.addImage("girl", girlImg)
  girl.scale = 0.12
  snowGroup = new Group();
  obstacleGroup = new Group();

  gameOver = createSprite(400, 200, 100,100)
  gameOver.addImage("gameOver", gameOverImg)
  gameOver.scale = 0.5
  gameOver.visible = false
}

function draw() {
  background(bg);  
  createSnow()
  createObstacle();
  if(snowGroup.isTouching(girl)){
   snowGroup.destroyEach()
   score = score + 50
    
    }
  if(obstacleGroup.isTouching(girl)){
    obstacleGroup.destroyEach()
    score = 0
    gameState = END
  }
  if(gameState === END){
    gameOver.visible = true
    obstacleGroup.destroyEach()
    snowGroup.destroyEach()
    velocityEachY = 0
    drawSprites();
    textSize(20)
    fill("BLUE")
    text("PRESS UP ARROW TO RESTART", 250,100)
  }

  //if (frameCount % 40 === 0) {
   // snowflake = createSprite(random(0, 800), 0, 100, 100);
   // snowflake.addImage("snow", snowflakeImg)
   // snowflake.scale = 0.17
   // snowflake.velocityY = 6;
  //}
  //snowGroup.add(snowflake)

  //for (var i = 0; i < snowGroup.length; i++) {
    //if (snowGroup.get(i).isTouching(girl)) {
     //  snowGroup.get(i).destroy();
   
   // }
  //}

 // if(snowGroup.isTouching(girl)){
  //  snowGroup.destroy
  //}
  

  if(keyDown(LEFT_ARROW)){
    girl.x -= 10
  }
  if(keyDown(RIGHT_ARROW)){
    girl.x += 10
  }

  if(keyDown(UP_ARROW)){
    gameState = PLAY
    gameOver.visible = false
  }
 
  drawSprites();
  textSize(20)
  fill("white")
  text("Score: " + score, 75, 50)

  
}

function createSnow(){
  if (frameCount % 40 === 0) {
    snowflake = createSprite(random(0, 800), 0, 100, 100);
    snowflake.addImage("snow", snowflakeImg)
    snowflake.scale = 0.17
    snowflake.velocityY = 6;
    snowGroup.add(snowflake)
  }
}
function createObstacle(){
  if(frameCount % 120 === 0){
    obstacle = createSprite(random(0,600), 5, 100, 100)
    obstacle.addImage("obstacle", obstacleImg)
    obstacle.scale = 0.17
    obstacle.velocityY = 6
    obstacleGroup.add(obstacle)
  }
}
