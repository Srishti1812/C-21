var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  bounceOff(movingRect, fixedRect);

  drawSprites();
}

function bounceOff(obg1, obg2){

  if (obg1.x - obg2.x < obg2.width/2 + obg1.width/2
    && obg2.x - obg1.x < obg2.width/2 + obg1.width/2) {
    obg1.velocityX = obg1.velocityX * (-1);
    obg2.velocityX = obg2.velocityX * (-1);
  }
  if (obg1.y - obg2.y < obg2.height/2 + obg1.height/2
    && obg2.y - obg1.y < obg2.height/2 + obg1.height/2){
    obg1.velocityY = obg1.velocityY * (-1);
    obg2.velocityY = obg2.velocityY * (-1);
  }
}