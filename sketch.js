
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof, bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rop4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,100,800,70);

	bob1 = new Bob(170,620);
	bob2 = new Bob(270,620);
	bob3 = new Bob(370,620);
	bob4 = new Bob(470,620);
	bob5 = new Bob(570,620);

	rope1 = new Chain(bob1.body,roof.body,-230,20);
	rope2 = new Chain(bob2.body,roof.body,-130,20);
	rope3 = new Chain(bob3.body,roof.body,-30,20);
	rope4 = new Chain(bob4.body,roof.body,70,20);
	rope5 = new Chain(bob5.body,roof.body,170,20);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);

  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}

function keyPressed(){
if(keyCode === UP_ARROW) {
	Matter.Body.setStatic(bob1.body,false);
}
}


