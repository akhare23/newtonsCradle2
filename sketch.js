const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 1600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	roof = new Roof();
	bobDiameter=40;
	startBobPositionX=400
	startBobPositionY=550
	ball = new Ball(650,startBobPositionY);
	ball2 = new Ball(690,startBobPositionY);
	ball3 = new Ball(730,startBobPositionY);
	ball4 = new Ball(770,startBobPositionY);
	ball5 = new Ball(810,startBobPositionY);
	rope1 = new Chain(ball.body,roof.body,-bobDiameter*2,0);
	rope2 = new Chain(ball2.body,roof.body,-bobDiameter,0);
	rope3 = new Chain(ball3.body,roof.body,0,0);
	rope4 = new Chain(ball4.body,roof.body,bobDiameter,0);
	rope5 = new Chain(ball5.body,roof.body,bobDiameter*2,0);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roof.display();
  ball.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  
  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(ball.body, {x:mouseX, y:mouseY})
	}




