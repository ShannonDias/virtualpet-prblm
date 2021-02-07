var dog,sadDog,happyDog;
var  foodObj

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);

  foodObj = new Food (600,60)
  feed=createButton('Feed The Dog')
  feed.position(700,95)
  feed.mousePressed(feedDog)

  addFood=createButton('Add Food')
  addFood.position(700,85)
  addFood.mousePressed(addFoods)
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

}

function draw() {
  background(46,139,87);

foodObj.display()

  drawSprites();
}

//function to read food Stock


//function to update food stock and last fed time


//function to add food in stock
