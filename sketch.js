
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,dustbin,dustbin2,dustbin3;
var ground;

function preload()
{
	
}

function setup() {
		createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper= new Paper(200,100,20);
	 
	dustbin= new Dustbin(500,660,100,20)
	dustbin2 = new Dustbin(460,630,20,100)
	dustbin3 = new Dustbin(550,630,20,100)

	ground = new Ground(600,680,1200,20);
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  paper.display();
  dustbin.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
}

function keyPressed(){
if(keyCode=== UP_ARROW){
  
 Matter.Body.applyForce(paper.body,paper.body.position,{x:40,y:-40});


}
}

