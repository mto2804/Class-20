var fixedrect, movingrect;






function setup() {
  createCanvas(800,800);
  fixedrect = createSprite(400, 200, 50, 80);
  movingrect = createSprite(200,200,80,50);
  fixedrect.shapeColor = ("red");
  movingrect.shapeColor = ("black");
}

function draw() {
  background(255,0,255);  
  movingrect.x = mouseX;
  movingrect.y = mouseY;
  if(fixedrect.x - movingrect.x <= fixedrect.width/2 + movingrect.width/2 && 
  movingrect.x - fixedrect.x <= movingrect.width/2 + fixedrect.width/2 &&
  fixedrect.y - movingrect.y <= fixedrect.height/2 + movingrect.width/2 &&
  movingrect.y - fixedrect.y <= movingrect.height/2 + fixedrect.height/2){
  fixedrect.shapeColor = "black";
  movingrect.shapeColor = "black";
  }
  else {
  fixedrect.shapeColor = ("red");
  movingrect.shapeColor = ("black");
  }
  drawSprites();
}