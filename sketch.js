const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bin1,bin2,bin3
var paper
var ground

function setup() {
	createCanvas(1600, 720)
   
    engine = Engine.create()
	world = engine.world

    bin1 = new bin(1165,680,200,20)
    bin2 = new bin(1055,610,20,100)
	bin3 = new bin(1260,610,20,100)
	paper = new Paper (110,445,30)
	ground=new Ground(width/2,670,width,20)

	Engine.run(engine)
  
}


function draw() {
  rectMode(CENTER)
  background("white")

   
   bin2.display()
   bin3.display()
   paper.display()
   ground.display()
   bin1.display()
}

function keyPressed() {
	if (keyCode === RIGHT_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-50})
	 }
   }