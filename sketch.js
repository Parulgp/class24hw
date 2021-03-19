
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer, stone, rubber;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);

engine = Engine.create();
	world = engine.world;

	ground=new Ground(600, 380, 1200, 20);
	hammer=new Hammer(700,320,70,70);
	stone=new Stone(700,320,70,70);
	rubber=new Rubber(700,320,70,70);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  ground.display();
  hammer.display();
  stone.display();
  rubber.display();
  
  drawSprites();
 
}



