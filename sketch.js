
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paper1, ground1;
var blockDown,blockLeft,blockRight;
var chance="true";

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper1 = new paper(70,50);

	ground1 = new ground(400,650,800,20);

	blockDown = new block(650,630,200,20);
	blockLeft = new block(550,580,20,100);
	blockRight= new block(750,580,20,100);

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);


  rectMode(CENTER);
  background(0);

  paper1.display();

  ground1.display();

  blockDown.display();
  blockLeft.display();
  blockRight.display();
  
  if (keyDown("up_arrow") && chance=="true") {
	Body.applyForce(paper1.body,paper1.body.position,{x:100,y:-100});
	chance="false";
  }

  drawSprites();
 
}



