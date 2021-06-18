var garden,rabbit;
var gardenImg,rabbitImg;
var carrot,carrotImg,



function preload (){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  carrotImg = loadImage("carrot.png")
}

function setup (){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(400,400);
Garden.addImage(gardenImg);





carrot = createSprite(200,100,20,20)
carrotImg.addImage(carrotImg,"carrotImg.png")
carrot.scale = 0.001

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
Rabbit.addImage(rabbitImg,"rabbit.png");
garden.depth  = rabbit.depth
rabbit.depth = rabbit.depth +1




}






function draw() {
background(0)


garden.velocityY = +2
 if (garden.x > 400){
 garden.height /2}

 
 rabbit.x = mouse.x
  edges= createEdgeSprites();
  rabbit.collide(edges);

spawnCarrot ()


  drawSprites();
}
function spawnCarrot() {

  if (frameCount %70 === 0){
    carrot = createSprite (200,200,10,10)
   carrot.addImage(carrot,carrotImg)
    carrot.x = random(150,350)
    carrot.velocityY = +2
    garden.depth = carrot.depth
    carrot.depth  = garden.depth +1
 
 
  }
}



