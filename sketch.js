var Wizard
var Monster
var platform
var magicball
var ground
var groundImage
var WizardImage
var monsterImage
var magicballImage
var backgroundImage
function perload(){
  WizardImage = loadImage("Wizard.png")
  backgroundImage =loadImage("back.jpg")
  //magicballImage = loadImage("download(1).jpg");
}

function setup() {
  createCanvas(800,400);

  Wizard= createSprite(350, 330, 50, 50);
  Wizard.shapeColor = "red";

 Wizard.addImage("Wizard",WizardImage);
  monster= createSprite( 250, 200 ,50 ,40);
  monster. shapeColor = "blue";
  platform= createSprite( 320, 260, 300, 20);
  platform. shapeColor = "green";
  ground= createSprite( 280, 400, 1020, 10);
  ground. shapeColor = "purple";
  ground.debug = "true"
  Wizard.debug = "ture"

}
function draw() {
  background(backgroundImage);
  if(keyIsDown   (38)){
  Wizard.velocityY = -11.9
  }
 Wizard. velocityY = Wizard. velocityY+ 0.8 
 Wizard. collide (ground);
 Wizard. collide (platform);
if(keyIsDown (37)){
  Wizard.velocityX = -6;
}

if(keyIsDown (39)){
  Wizard.velocityX = 6;
}

createmagicball
  drawSprites();
}




function createmagicball(){
magicball= createSprite (240, 210, 50, 50);

magicball.addImage(magicballImage);
if (keyIsDown (40)){
createmagicball
}
}